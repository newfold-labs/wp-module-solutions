<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\Solutions\I18nService;
use NewfoldLabs\WP\Module\Data\HiiveConnection;
use NewfoldLabs\WP\Module\Data\SiteCapabilities;

/**
 * Manages all the functionalities for the module.
 */
class Solutions {
	/**
	 * Dependency injection container.
	 *
	 * @var Container
	 */
	protected $container;

	/**
	 * Entitlements API class instance.
	 *
	 * @var EntitlementsApi
	 */
	protected static $entitlements_api;

	/**
	 * Constructor for the Solutions class.
	 *
	 * @param Container $container The module container.
	 */
	public function __construct( Container $container ) {
		$hiive = new HiiveConnection();

		self::$entitlements_api = new EntitlementsApi( $hiive );
		// We're trying to avoid adding more stuff to this.
		$this->container = $container;
		\add_action( 'rest_api_init', array( $this, 'init_entitilements_apis' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_plugins_solutions_menu_link' ) );
		\add_action( 'init', array( __CLASS__, 'load_text_domain' ), 100 );
		\add_action( 'admin_enqueue_scripts', array( __CLASS__, 'solutions_page_assets' ) );
		\add_action( 'admin_enqueue_scripts', array( $this, 'addnew_plugins_solutions_assets' ) );

		\add_filter( 'nfd_plugin_subnav', array( $this, 'add_nfd_subnav' ) );
		\add_filter( 'install_plugins_tabs', array( $this, 'addnew_brand_solutions_tab' ), 99 );
		\add_filter( 'install_plugins_nfd_solutions', array( $this, 'render_nfd_solutions_tab' ) );
	}

	/**
	 * Initialize the Entitilement API Controller.
	 */
	public function init_entitilements_apis(): void {
		self::$entitlements_api->register_routes();
	}

	/**
	 * Add "My Solution" sub-link to admin plugins menu.
	 */
	public static function add_plugins_solutions_menu_link() {
		\add_submenu_page(
			'plugins.php',
			'My Solution',
			'My Solution',
			'manage_options',
			'plugin-install.php?tab=nfd_solutions',
			null,
			3,
		);
	}

	/**
	 * Add to the Newfold subnav.
	 *
	 * @param array $subnav The nav array.
	 * @return array The filtered nav array
	 */
	public static function add_nfd_subnav( $subnav ) {
		$solutions = array(
			'title'    => __( 'Solutions', 'wp-module-solutions' ),
			'route'    => 'solutions',
			'priority' => 10,
			'callback' => array( __CLASS__, 'render_solutions_page' ),
		);
		array_push( $subnav, $solutions );
		return $subnav;
	}

	/**
	 * Render "Solutions" page root
	 *
	 * @return void
	 */
	public static function render_solutions_page() {
		echo '<div id="nfd-solutions-app"></div>';
	}

	/**
	 * Enqueue assets and set locals.
	 */
	public static function solutions_page_assets() {
		$asset_file = NFD_SOLUTIONS_DIR . '/build/solutions-page/bundle.asset.php';
		if ( is_readable( $asset_file ) ) {
			$asset = include_once $asset_file;
		} else {
			return;
		}

		\wp_register_script(
			'solutions-page',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-page/bundle.js',
			array_merge(
				$asset['dependencies'],
				array( 'nfd-installer' ),
			),
			$asset['version'],
			true
		);

		\wp_register_style(
			'solutions-page-style-common',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-page/style-solutions-page.css',
			null,
			$asset['version']
		);

		\wp_register_style(
			'solutions-page-style',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-page/solutions-page.css',
			array( 'nfd-installer', 'solutions-page-style-common' ),
			$asset['version']
		);

		// Only enqueue on solutions page
		$screen = \get_current_screen();
		if ( isset( $screen->id ) && false !== strpos( $screen->id, 'solution' ) ) {
			\wp_enqueue_script( 'solutions-page' );
			\wp_enqueue_style( 'solutions-page-style' );

			$solutions_data = json_decode( \wp_json_encode( self::$entitlements_api->get_items()->data ), true );

			if ( array_key_exists( 'entitlements', $solutions_data ) ) {
				$solutions_data['entitlements'] = array_map(
					function ( $entitlement ) {
						$entitlement['isActive'] = is_plugin_active( $entitlement['basename'] );
						return $entitlement;
					},
					$solutions_data['entitlements']
				);
			}

			\wp_localize_script(
				'solutions-page',
				'NewfoldSolutions',
				array_merge(
					$solutions_data,
				)
			);
		}
	}

	/**
	 * Load text domain for Module
	 *
	 * @return void
	 */
	public static function load_text_domain() {
		\load_plugin_textdomain(
			'wp-module-solutions',
			false,
			NFD_SOLUTIONS_DIR . '/languages'
		);

		\load_script_textdomain(
			'nfd_myplugin_solutions_js',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);
	}

	/**
	 * Add "Brand solution" tab to plugins install tabs.
	 *
	 * @param array $tabs Collection of tabs.
	 *
	 * @return array
	 */
	public function addnew_brand_solutions_tab( $tabs ) {
		$name          = $this->container->plugin()->brand;
		$solutions_tab = array( 'nfd_solutions' => ucfirst( $name ) . ' ' . __( 'Solutions', 'wp-module-solutions' ) );
		return array_merge( $solutions_tab, $tabs );
	}

	/**
	 * Render solutions section on "Add new" plugins section.
	 *
	 * @return void
	 */
	public function render_nfd_solutions_tab() {
		echo '<div id="nfd-add-new-app"></div>';
	}

	/**
	 * Enqueue assets and set locals for brand solutions on add plugins section.
	 *
	 * @param string $hook The current admin page.
	 */
	public function addnew_plugins_solutions_assets( $hook ) {
		$asset_file = NFD_SOLUTIONS_DIR . '/build/addnew/bundle.asset.php';
		if ( is_readable( $asset_file ) ) {
			$asset = include_once $asset_file;
		} else {
			return;
		}

		\wp_register_script(
			'solutions-add-new-tools',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/addnew/bundle.js',
			array_merge(
				$asset['dependencies'],
				array( 'nfd-installer' ),
			),
			$asset['version'],
			true
		);

		\wp_register_style(
			'solutions-add-new',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/addnew/addnew.css',
			null,
			$asset['version']
		);

		\wp_register_style(
			'solutions-add-new-style',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/addnew/style-addnew.css',
			array( 'nfd-installer', 'solutions-add-new' ),
			$asset['version']
		);

		// Only enqueue on plugin install page
		if ( 'plugin-install.php' === $hook ) {
			\wp_enqueue_script( 'solutions-add-new-tools' );
			\wp_enqueue_style( 'solutions-add-new-style' );

			$solutions_data = json_decode( \wp_json_encode( self::$entitlements_api->get_items()->data ), true );

			if ( array_key_exists( 'entitlements', $solutions_data ) ) {
				$solutions_data['entitlements'] = array_map(
					function ( $entitlement ) {
						$entitlement['isActive'] = is_plugin_active( $entitlement['basename'] );
						return $entitlement;
					},
					$solutions_data['entitlements']
				);
			}

			\wp_localize_script(
				'solutions-add-new-tools',
				'NewfoldSolutions',
				array_merge(
					$solutions_data,
					array(
						'siteUrl' => get_site_url(),
					)
				)
			);

			$script = "
			document.addEventListener('DOMContentLoaded', function() {
				let icon = `<svg id='ndf-tools-plugin-bluehost-brand' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd'
						d='M16 4.46067V0H11.5302V4.46067H16ZM16 5.76933V10.2307H11.5302V5.76933H16ZM4.46778 16V11.5387H0V16H4.46778ZM10.2339 11.5387V16H5.76409V11.5387H10.2339ZM16 11.5387V16H11.5302V11.5387H16ZM10.2339 10.2307V5.76933H5.76409V10.2307H10.2339ZM4.46778 5.76933V10.2307H0V5.76933H4.46778ZM10.2305 0V4.46067H5.76409V0H10.2305ZM4.46778 4.46067V0H0V4.46067H4.46778Z'
						fill='#196BDE'/>
				</svg>`;
				const filterPremiumLink = document.querySelector('.plugin-install-nfd_solutions > a');
				if (filterPremiumLink) {
					filterPremiumLink.innerHTML = icon + filterPremiumLink.innerHTML;
				}
			});
		";

			\wp_add_inline_script( 'solutions-add-new-tools', $script );
		}
	}
}
