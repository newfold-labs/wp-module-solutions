<?php

namespace NewfoldLabs\WP\Module\Solutions;

/**
 * Class for handling internationalization.
 */
class I18nService {

	/**
	 * Init the i18n service
	 *
	 * @param Container $container the container
	 */
	public function __construct( $container ) {
		add_action( 'init', array( $this, 'add_php_i18n' ), 100 );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_js_i18n' ), 100 );
		add_filter(
			'load_script_translation_file',
			array( $this, 'load_script_translation_file' ),
			10,
			3
		);
	}

	/**
	 * Load module text domain
	 *
	 * @return void
	 */
	public function add_php_i18n() {
		load_plugin_textdomain(
			'wp-module-solutions',
			false,
			NFD_SOLUTIONS_DIR . '/languages'
		);
		// Load the PHP translations from .l10n.php files in the languages dir.
		load_textdomain(
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages/wp-module-solutions-' . get_locale() . '.l10n.php'
		);
	}

	/**
	 * Enqueue js/script for translations of the solutions app
	 */
	public function add_js_i18n() {
		// solutions page
		wp_set_script_translations(
			'solutions-page',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);
		load_script_textdomain(
			'solutions-page',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);

		// addnew tools page
		wp_set_script_translations(
			'solutions-add-new-tools',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);
		load_script_textdomain(
			'solutions-add-new-tools',
			'wp-module-solutions',
			NFD_SOLUTIONS_DIR . '/languages'
		);
	}

	/**
	 * Filters the file path for the JS translation JSON.
	 *
	 * If the script handle matches the module's handle, builds a custom path using
	 * the languages directory, current locale, text domain, and a hash of the script.
	 *
	 * @param string $file   Default translation file path.
	 * @param string $handle Script handle.
	 * @param string $domain Text domain.
	 * @return string Modified file path for the translation JSON.
	 */
	public function load_script_translation_file( $file, $handle, $domain ) {
		if ( 'solutions-page' === $handle ) {
			$file_base = $domain . '-' . determine_locale();
			// Build the file path using the languages directory and the hash of the script.
			$file = NFD_SOLUTIONS_DIR . '/languages/' . $file_base . '-' . md5( 'build/solutions-page/bundle.js' ) . '.json';
		}
		if ( 'solutions-add-new-tools' === $handle ) {
			$file_base = $domain . '-' . determine_locale();
			// Build the file path using the languages directory and the hash of the script.
			$file = NFD_SOLUTIONS_DIR . '/languages/' . $file_base . '-' . md5( 'build/addnew/bundle.js' ) . '.json';
		}
		return $file;
	}
}
