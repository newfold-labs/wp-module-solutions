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
	 * Constructor for the Solutions class.
	 *
	 * @param Container $container The module container.
	 */
	public function __construct( Container $container ) {
		// We're trying to avoid adding more stuff to this.
		$this->container = $container;

		add_filter( 'install_plugins_tabs', array( __CLASS__, 'add_my_plugins_and_tools_tab' ) );
		add_action( 'admin_head-plugin-install.php', array( __CLASS__, 'my_plugins_and_tools_tab_enqueue_assets' ) );

		add_action( 'rest_api_init', array( $this, 'init_entitilements_apis' ) );
		add_action( 'admin_menu', array( __CLASS__, 'add_plugins_and_tools_menu_link' ) );
	}

	/**
	 * Loads the textdomain for the module. This applies only to PHP strings.
	 *
	 * @return boolean
	 */
	public static function load_php_textdomain() {
		return I18nService::load_php_translations(
			'wp-module-solutions',
			NFD_SOLUTIONS_PLUGIN_DIRNAME . '/vendor/newfold-labs/wp-module-solutions/languages'
		);
	}

	/**
	 * Load the textdomains for the module.
	 */
	public function register_textdomains() {
		$module_lang_dir = $this->container->plugin()->dir . 'vendor/newfold-labs/wp-module-solutions/languages';
		\load_script_textdomain( 'nfd-solutions-dependency', 'wp-module-solutions', $module_lang_dir );
		$current_language = get_locale();
		\load_textdomain( 'wp-module-solutions', $module_lang_dir . '/wp-module-solutions-' . $current_language . '.mo' );
	}

	/**
	 * Load WP dependencies into the page.
	 */
	public function register_assets() {
		$asset_file = NFD_SOLUTIONS_BUILD_DIR . 'index.asset.php';
		if ( file_exists( $asset_file ) ) {
			$asset = require $asset_file;
			\wp_register_script(
				'nfd-solutions-dependency',
				NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/index.js',
				array_merge( $asset['dependencies'], array() ),
				$asset['version']
			);
			I18nService::load_js_translations(
				'wp-module-solutions',
				'nfd-solutions-dependency',
				NFD_SOLUTIONS_DIR . '/languages'
			);
			\wp_enqueue_script( 'nfd-solutions-dependency' );
		}
	}

	/**
	 * Initialize the Entitilement API Controller.
	 */
	public function init_entitilements_apis(): void {
		$hiive = new HiiveConnection();

		$entitlements_api = new EntitlementsApi( $hiive );
		$entitlements_api->register_routes();
	}

	/**
	 * Add "My Plugins & tools" tab to plugins install tabs.
	 *
	 * @param array $tabs Collection of tabs.
	 *
	 * @return array
	 */
	public static function add_my_plugins_and_tools_tab( array $tabs ) {
		$capability = new SiteCapabilities();
		if ( $capability->get( 'hasSolution' ) ) {
			$tabs['nfd_my_plugins_and_tools'] = __( 'My Plugins & Tools', 'wp-module-solutions' );
		}
		return $tabs;
	}

	/**
	 * Add "Plugins && tools" sub-link to admin menu.
	 */
	public static function add_plugins_and_tools_menu_link() {
		$capability = new SiteCapabilities();
		if ( $capability->get( 'hasSolution' ) ) {
			add_submenu_page(
				'plugins.php',
				'nfd_my_plugins_and_tools',
				'My Plugins & Tools',
				'manage_options',
				'plugin-install.php?tab=nfd_my_plugins_and_tools'
			);
		}
	}

	/**
	 * Enqueue assets and set locals.
	 */
	public static function my_plugins_and_tools_tab_enqueue_assets() {
		if ( false === ( isset( $_GET['tab'] ) && 'nfd_my_plugins_and_tools' === $_GET['tab'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return;
		}

		// TODO: update this to a dependency script
		do_action( 'newfold/installer/enqueue_scripts' );

		wp_enqueue_style( 'nfd_myplugin_solutions_css', NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/includes/css/myPluginsTools.css', array(), '1.0' );
		wp_enqueue_script( 'nfd_myplugin_solutions_js', NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/includes/js/myPluginsTools.js', array(), '1.0', true );

		wp_localize_script(
			'nfd_myplugin_solutions_js',
			'nfdPluginDetails',
			array(
				'installed' => get_plugins(),
				'active'    => get_option( 'active_plugins' ),
			)
		);
	}
}
