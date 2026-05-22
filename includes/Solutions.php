<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\Solutions\I18nService;
use NewfoldLabs\WP\Module\Data\HiiveConnection;
use NewfoldLabs\WP\Module\Data\SiteCapabilities;

use function NewfoldLabs\WP\ModuleLoader\container;

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
	 * Body class for standalone Solutions admin screens loaded by this module.
	 *
	 * @param string $classes Space-separated class list from WordPress core.
	 * @return string
	 */
	public static function add_solutions_admin_body_class( $classes ) {
		if ( ! is_admin() ) {
			return $classes;
		}
		$screen = function_exists( 'get_current_screen' ) ? \get_current_screen() : null;
		if ( isset( $screen->id ) && false !== strpos( $screen->id, 'solution' ) ) {
			return trim( $classes . ' nfd-solutions-admin' );
		}

		return $classes;
	}

	/**
	 * Constructor for the Solutions class.
	 *
	 * @param Container $container The module container.
	 */
	public function __construct( Container $container ) {
		$hiive                  = new HiiveConnection();
		self::$entitlements_api = new EntitlementsApi( $hiive );
		$this->container        = $container;
		\add_action( 'rest_api_init', array( $this, 'init_entitilements_apis' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_plugins_solutions_menu_link' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_jetpack_menu_link' ) );
		\add_action( 'admin_init', array( __CLASS__, 'check_jetpack_connection_redirect' ) );

		\add_action( 'admin_enqueue_scripts', array( __CLASS__, 'solutions_page_assets' ) );
		\add_action( 'admin_enqueue_scripts', array( __CLASS__, 'solutions_page_component_assets' ) );
		\add_action( 'admin_enqueue_scripts', array( $this, 'addnew_plugins_solutions_assets' ) );

		\add_filter( 'admin_body_class', array( __CLASS__, 'add_solutions_admin_body_class' ), 99 );

		\add_filter( 'nfd_plugin_subnav', array( $this, 'add_nfd_subnav' ) );
		\add_action( 'admin_menu', array( __CLASS__, 'add_dummy_solutions_menu_link' ) );
		\add_action( 'admin_init', array( __CLASS__, 'handle_solutions_redirect' ) );
		\add_filter( 'install_plugins_tabs', array( $this, 'addnew_brand_solutions_tab' ), 99 );
		\add_filter( 'install_plugins_nfd_solutions', array( $this, 'render_nfd_solutions_tab' ) );

		new I18nService( $container );
		new SolutionsUpsell( $container );
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
			__( 'My Solution', 'wp-module-solutions' ),
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
		$brand       = container()->get( 'plugin' )['id'];
		$solutions = array(
			'title'    => __( 'Solutions', 'wp-module-solutions' ),
			'route'    => $brand . '#/commerce',
			'priority' => 10,
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
	 * Register dummy solutions menu page for redirect purposes
	 */
	public static function add_dummy_solutions_menu_link() {
		add_submenu_page(
			'', // Using empty string as parent, so it won't appear in any menu
			'Old Solutions',
			'',
			'manage_options',
			'solutions',
			array( __CLASS__, 'old_solutions_redirect' )
		);
	}

	/**
	 * Handle performance redirect from old URL.
	 * This runs on admin_init to catch the redirect before headers are sent.
	 *
	 * @return void
	 */
	public static function handle_solutions_redirect() {
		if (
			is_admin() &&
			isset( $_GET['page'] ) &&
			'solutions' === $_GET['page']
		) {
			$new_url = admin_url( 'admin.php?page=' . container()->plugin()->id . '#/commerce' );
			wp_safe_redirect( $new_url );
			exit;
		}
	}

	/**
	 * Redirects the user to the new solutions page.
	 * This is the callback for the dummy menu page.
	 *
	 * @return void
	 */
	public static function old_solutions_redirect() {
		// Fallback: redirect using JavaScript if headers already sent
		$new_url = admin_url( 'admin.php?page=' . container()->plugin()->id . '#/commerce' );
		?>
		<script>
			window.location.href = '<?php echo esc_js( $new_url ); ?>';
		</script>
		<p>Redirecting to new solutions page...</p>
		<?php
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
		if ( isset( $screen->id ) && ( false !== strpos( $screen->id, 'solution' ) ) ) {
			\wp_enqueue_script( 'solutions-page' );
			\wp_enqueue_style( 'solutions-page-style' );
			self::add_branding_primary_inline_style( 'solutions-page-style' );

			\wp_localize_script(
				'solutions-page',
				'NewfoldSolutions',
				self::get_newfold_solutions_payload()
			);
		}
	}


	/**
	 * Enqueue assets and set locals.
	 */
	public static function solutions_page_component_assets() {
		$asset_file = NFD_SOLUTIONS_DIR . '/build/solutions-page-component/index.asset.php';
		if ( is_readable( $asset_file ) ) {
			$asset = include_once $asset_file;
		} else {
			return;
		}

		\wp_register_script(
			'solutions-page-component',
			false,
			null,
			$asset['version']
		);

		\wp_register_style(
			'solutions-page-component-style-common',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-page-component/style-solutions-page-component.css',
			null,
			$asset['version']
		);

		\wp_register_style(
			'solutions-page-component-style',
			NFD_SOLUTIONS_PLUGIN_URL . 'vendor/newfold-labs/wp-module-solutions/build/solutions-page-component/solutions-page-component.css',
			array( 'nfd-installer', 'solutions-page-component-style-common' ),
			$asset['version']
		);

		// Only enqueue on solutions page
		$screen = \get_current_screen();
		if ( isset( $screen->id ) && false !== strpos( $screen->id, container()->plugin()->id ) ) {
			\wp_enqueue_style( 'solutions-page-component-style' );
			self::add_branding_primary_inline_style( 'solutions-page-component-style' );

			\wp_add_inline_script(
				'solutions-page-component',
				'window.NewfoldSolutions =' . wp_json_encode( self::get_newfold_solutions_payload() ) . ';',
				'before'
			);
			\wp_enqueue_script( 'solutions-page-component' );
		}
	}

	/**
	 * Add "Brand solution" tab to plugins install tabs.
	 *
	 * @param array $tabs Collection of tabs.
	 *
	 * @return array
	 */
	public function addnew_brand_solutions_tab( $tabs ) {
		$branding = SolutionsBranding::get_localization_branding( $this->container );
		$name     = '';
		if ( isset( $branding['brandDisplayName'] ) && is_string( $branding['brandDisplayName'] ) && '' !== trim( $branding['brandDisplayName'] ) ) {
			$name = trim( $branding['brandDisplayName'] );
		} else {
			$name = ucfirst( (string) $this->container->plugin()->brand );
		}
		$solutions_tab = array( 'nfd_solutions' => $name . ' ' . __( 'Solutions', 'wp-module-solutions' ) );
		return array_merge( $solutions_tab, $tabs );
	}

	/**
	 * Render solutions section on "Add new" plugins section.
	 *
	 * @return void
	 */
	public function render_nfd_solutions_tab() {
		global $wp_list_table;
		echo '<div id="nfd-add-new-app"></div>';

		if ( isset( $wp_list_table ) ) {
			?>
			<form id="plugin-filter" class="ndf-plugin-filter-section" method="post">
				<?php $wp_list_table->display(); ?>
			</form>
			<?php
		}
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
			self::add_branding_primary_inline_style( 'solutions-add-new-style' );

			\wp_localize_script(
				'solutions-add-new-tools',
				'NewfoldSolutions',
				array_merge(
					self::get_newfold_solutions_payload(),
					array(
						'siteUrl' => get_site_url(),
					)
				)
			);

			\wp_add_inline_script(
				'solutions-add-new-tools',
				SolutionsBranding::get_plugin_install_tab_icon_inline_script( $this->container )
			);
		}
	}

	/**
	 * Entitlements merged with localization branding for `window.NewfoldSolutions`.
	 *
	 * @return array<string,mixed>
	 */
	public static function get_newfold_solutions_payload(): array {
		return array_merge(
			self::get_enhanced_entitlment_data(),
			array(
				'branding' => SolutionsBranding::get_localization_branding( container() ),
			)
		);
	}

	/**
	 * Outputs inline CSS custom property for `--nfd-solutions-primary`.
	 *
	 * @param string $style_handle Style handle queued before calling.
	 * @return void
	 */
	protected static function add_branding_primary_inline_style( $style_handle ) {
		$hex = SolutionsBranding::get_primary_color_hex( container() );
		$css = ':root{--nfd-solutions-primary:' . esc_attr( $hex ) . ';}';

		wp_add_inline_style( $style_handle, $css );
	}

	/**
	 * Enhance the entitlements data with data regarding isActive on site.
	 *
	 * @return array The enhanced entitlements data.
	 */
	public static function get_enhanced_entitlment_data() {
		// get the entitlements data from the API (or from the transient if it exists)
		$solutions_data = json_decode( \wp_json_encode( self::$entitlements_api->get_entitlements_data()->data ), true );

		// validate response
		if ( ! is_array( $solutions_data ) || empty( $solutions_data ) ) {
			return EntitlementsApi::$default_response;
		}
		// check if entitlements data is present
		if ( array_key_exists( 'entitlements', $solutions_data ) && is_array( $solutions_data['entitlements'] ) ) {
			$solutions_data['entitlements'] = array_map(
			// add isActive key to any entitlement that is active on the site
				function ( $entitlement ) {
					$entitlement['isActive'] = is_plugin_active( $entitlement['basename'] );
					return $entitlement;
				},
				$solutions_data['entitlements']
			);
		}
		return $solutions_data;
	}

	/**
	 * Checks Jetpack connection status and redirects the user accordingly.
	 *
	 * This function is triggered when visiting the admin page `admin.php?page=check-jetpack-connection`.
	 * It checks if Jetpack is connected using the Jetpack Connection Manager class.
	 * Based on the result, it redirects the user either to the Jetpack Forms responses page
	 * (if connected) or the Jetpack onboarding dashboard (if not connected).
	 *
	 * @return void
	 */
	public static function check_jetpack_connection_redirect() {

		if (
			is_admin() &&
			isset( $_GET['page'] ) &&
			'check-jetpack-connection' === $_GET['page']
		) {
			$connected = false;
			// Use Jetpack's internal check if available
			if ( class_exists( '\Automattic\Jetpack\Connection\Manager' ) ) {
				$manager   = new \Automattic\Jetpack\Connection\Manager();
				$connected = $manager->is_connected();
			}
			// Set your redirect destinations
			$redirect_url_if_connected     = admin_url( 'admin.php?page=jetpack-forms-admin#/responses' ); // Feedback post type
			$redirect_url_if_not_connected = admin_url( 'admin.php?page=jetpack#/dashboard' ); // Jetpack dashboard (onboarding)

			wp_safe_redirect( $connected ? $redirect_url_if_connected : $redirect_url_if_not_connected );
			exit;
		}
	}

	/**
	 * Registers a hidden submenu page for checking Jetpack connection status.
	 */
	public static function add_jetpack_menu_link() {

		\add_submenu_page(
			'', // Using empty string as parent, so it won't appear in any menu
			'Jetpack Connection Check',
			'',
			'manage_options',
			'check-jetpack-connection',
			array( __CLASS__, 'check_jetpack_connection_redirect' ),
		);
	}
}
