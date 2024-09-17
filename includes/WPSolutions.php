<?php

namespace NewfoldLabs\WP\Module\WPSolutions;

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\WPSolutions\I18nService;

/**
 * Manages all the functionalities for the module.
 */
class WPSolutions {
	/**
	 * Dependency injection container.
	 *
	 * @var Container
	 */
	protected $container;

	/**
	 * Constructor for the WPSolutions class.
	 *
	 * @param Container $container The module container.
	 */
	public function __construct( Container $container ) {
		// We're trying to avoid adding more stuff to this.
		$this->container = $container;

		do_action( 'qm/debug', 'Hello from the Solutions module!' );
	}

	/**
	 * Loads the textdomain for the module. This applies only to PHP strings.
	 *
	 * @return boolean
	 */
	public static function load_php_textdomain() {
		return I18nService::load_php_translations(
			'wp-module-solutions',
			NFD_WPSOLUTIONS_PLUGIN_DIRNAME . '/vendor/newfold-labs/wp-module-solutions/languages'
		);
	}

	/**
	 * Load the textdomains for the module.
	 */
	public function register_textdomains() {
		$MODULE_LANG_DIR = $this->container->plugin()->dir . 'vendor/newfold-labs/wp-module-solutions/languages';
		\load_script_textdomain( 'nfd-wpsolutions-dependency', 'wp-module-solutions', $MODULE_LANG_DIR );
		$current_language = get_locale();
		\load_textdomain( 'wp-module-solutions', $MODULE_LANG_DIR . '/wp-module-solutions-' . $current_language . '.mo' );
	}	

	/**
	 * Load WP dependencies into the page.
	 */
	public function register_assets() {
		$asset_file = NFD_WPSOLUTIONS_BUILD_DIR . 'index.asset.php';
		if ( file_exists( $asset_file ) ) {
			$asset = require $asset_file;
			\wp_register_script(
				'nfd-wpsolutions-dependency',
				NFD_WPSOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/index.js',
				array_merge( $asset['dependencies'], array() ),
				$asset['version']
			);
			I18nService::load_js_translations(
				'wp-module-solutions',
				'nfd-wpsolutions-dependency',
				NFD_WPSOLUTIONS_DIR . '/languages'
			);
			\wp_enqueue_script( 'nfd-wpsolutions-dependency' );
		}
	}

}
