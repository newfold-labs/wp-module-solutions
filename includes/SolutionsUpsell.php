<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;

/**
 * Manages all the functionalities for the module.
 */
class SolutionsUpsell {

	/**
	 * Dependency injection container.
	 *
	 * @var Container
	 */
	protected $container;

	/**
	 * Class construct
	 *
	 * @param  Container $container  The module container.
	 */
	public function __construct( Container $container ) {
		$this->container = $container;
		$this->init();
	}

	/**
	 * Init class hooks and filters
	 */
	protected function init(): void {
		if ( ! $this->can_access_global_ctb() ) {
			return;
		}

		\add_action( 'admin_enqueue_scripts', array( $this, 'load_assets' ), 20 );
	}

	/**
	 * Enqueue assets for solutions upsell sections
	 */
	public function load_assets(): void {
		$asset_file = NFD_SOLUTIONS_DIR . '/build/solutions-upsell/bundle.asset.php';
		if ( is_readable( $asset_file ) ) {
			$asset = include_once $asset_file;
		} else {
			return;
		}

		\wp_register_script(
			'solutions-upsell',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-upsell/bundle.js',
			array_merge(
				$asset['dependencies'],
				array( 'newfold-global-ctb', 'selectWoo' ),
			),
			$asset['version'],
			true
		);

		\wp_register_style(
			'solutions-upsell-style',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-upsell/style-solutions-upsell.css',
			array(),
			$asset['version']
		);

		// Only enqueue on solutions page.
		$screen = \get_current_screen();
		if ( isset( $screen->id, $screen->post_type ) && 'product' === $screen->id && 'product' === $screen->post_type ) {
			\wp_enqueue_script( 'solutions-upsell' );

			\wp_enqueue_style( 'newfold-global-ctb-style' );
			\wp_enqueue_style( 'solutions-upsell-style' );

			\wp_localize_script(
				'solutions-upsell',
				'NewfoldSolutionsUpsell',
				array_merge(
					$this->get_entitlement_upsell(),
				)
			);
		}
	}

	/**
	 * Get upsell
	 */
	protected function get_entitlement_upsell(): array {

		$upsell               = array();
		$entitlements         = Solutions::get_enhanced_entitlment_data();
		$premium_entitlements = $entitlements['premium'] ?? array();

		// TODO add to Hiive option to show entitlement in upsell section.
		$entitlements_with_upsell = array(
			'yith-woocommerce-booking-premium/init.php'    => 'Bookable product',
			'yith-woocommerce-gift-cards-premium/init.php' => 'Gift card',
		);

		foreach ( $premium_entitlements as $entitlement ) {
			if ( is_plugin_active( $entitlement['basename'] ) || empty( $entitlement['ctbId'] ) || ! array_key_exists( $entitlement['basename'], $entitlements_with_upsell ) ) {
				continue;
			}

			$upsell[] = array(
				'slug'     => $entitlement['slug'],
				'name'     => $entitlements_with_upsell[ $entitlement['basename'] ],
				'basename' => $entitlement['basename'],
				'ctbId'    => $entitlement['ctbId'],
			);
		}

		return $upsell;
	}

	/**
	 * Can current user access global CTB?
	 */
	protected function can_access_global_ctb(): bool {
		return ! ! $this->container->get( 'capabilities' )->get( 'canAccessGlobalCTB' );
	}
}
