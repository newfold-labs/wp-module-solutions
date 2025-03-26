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
	static protected $entitlements_api;

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
		\add_filter( 'install_plugins_tabs', array( __CLASS__, 'add_my_plugins_and_tools_tab' ) );
		\add_action( 'admin_head-plugin-install.php', array( __CLASS__, 'my_plugins_and_tools_tab_enqueue_assets' ) );
		\add_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_admin_assets' ) );
		\add_action( 'rest_api_init', array( $this, 'init_entitilements_apis' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_plugins_and_tools_menu_link' ) );
		\add_action( 'init', array( __CLASS__, 'load_text_domain' ), 100 );
		\add_filter( 'nfd_plugin_subnav', array( $this, 'add_nfd_subnav' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_solutions_page' ) );
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
		self::$entitlements_api->register_routes();
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
			\add_submenu_page(
				'plugins.php',
				'nfd_my_plugins_and_tools',
				'My Plugins & Tools',
				'manage_options',
				'plugin-install.php?tab=nfd_my_plugins_and_tools'
			);
		}
	}

	/**
	 * Add to the Newfold subnav.
	 *
	 * @param array $subnav The nav array.
	 * @return array The filtered nav array
	 */
	public function add_nfd_subnav( $subnav ) {
		$brand       = $this->container->get( 'plugin' )['id'];
		$performance = array(
			'route'    => 'solutions',
			'title'    => __( 'Solutions', 'wp-module-solutions' ),
			'priority' => 10,
		);
		array_push( $subnav, $performance );
		return $subnav;
	}

	/**
	 * Add "Solutions" page to admin menu.
	 */
	public static function add_solutions_page() {
		\add_menu_page(
			__( 'Solutions', 'wp-module-solutions' ),
			__( 'Solutions', 'wp-module-solutions' ),
			'manage_options',
			'solutions',
			array( __CLASS__, 'render_solutions_page' ),
			'dashicons-lightbulb',
			-1
		);
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
	public static function enqueue_admin_assets( $hook ) {
		if ( $hook !== 'toplevel_page_solutions' ) {
			return;
		}

		$assets_info = include NFD_SOLUTIONS_DIR . '/build/bundle.asset.php';

		\wp_enqueue_script(
			'solutions-react',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/bundle.js',
			array_merge(
				$assets_info['dependencies'],
				array( 'nfd-installer' ),
			),
			$assets_info['version'],
			true
		);

		\wp_enqueue_style(
			'solutions-react-style',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/main.css',
			array( 'nfd-installer' ),
			$assets_info['version']
		);

		$solutions_data = json_decode( json_encode( self::$entitlements_api->get_items()->data ), true );

		$solutions_data['entitlements'] = array_map( function ( $entitlement ) {
			'yith-woocommerce-booking-premium/init.php' === $entitlement['basename'] && var_log( is_plugin_active( $entitlement['basename'] ) );
			$entitlement['isActive'] = is_plugin_active( $entitlement['basename'] );
			return $entitlement;
		}, $solutions_data['entitlements'] );

		\wp_localize_script(
			'solutions-react',
			'NewfoldSolutions',
			array_merge(
				$solutions_data,
				array(
					'siteUrl' => get_site_url(),
				)
			)
		);
	}

	/**
	 * Enqueue assets and set locals.
	 */
	public static function my_plugins_and_tools_tab_enqueue_assets() {
		if ( false === ( isset( $_GET['tab'] ) && 'nfd_my_plugins_and_tools' === $_GET['tab'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return;
		}

		\wp_enqueue_style(
			'nfd_myplugin_solutions_css',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/includes/css/myPluginsTools.css',
			// Note the dependency on the installer styles to ensure the installer module styles are loaded.
			array( 'nfd-installer' ),
			'1.1.0'
		);

		\wp_enqueue_script(
			'nfd_myplugin_solutions_js',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/includes/js/myPluginsTools.js',
			// Note the dependency on the installer script to ensure the installer module scripts is loaded.
			// If the installer module is not also loaded via brand plugin, this solutions script will not load.
			array( 'nfd-installer' ),
			'1.1.0',
			true
		);

		\wp_localize_script(
			'nfd_myplugin_solutions_js',
			'nfdPluginDetails',
			array(
				'installed' => get_plugins(),
				'active'    => get_option( 'active_plugins' ),
			)
		);

		\wp_set_script_translations(
			'nfd_myplugin_solutions_js',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);
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
}
