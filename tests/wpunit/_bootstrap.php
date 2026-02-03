<?php
/**
 * Bootstrap file for wpunit tests.
 *
 * @package NewfoldLabs\WP\Module\Solutions
 */

$module_root = dirname( dirname( __DIR__ ) );

require_once $module_root . '/vendor/autoload.php';

// Define constants that Solutions expects when loaded via container callback.
if ( ! defined( 'NFD_SOLUTIONS_DIR' ) ) {
	define( 'NFD_SOLUTIONS_DIR', $module_root );
}
if ( ! defined( 'NFD_SOLUTIONS_BUILD_DIR' ) ) {
	define( 'NFD_SOLUTIONS_BUILD_DIR', $module_root . '/build/' );
}

