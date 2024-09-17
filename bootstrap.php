<?php

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\WPSolutions\WPSolutions;

use function NewfoldLabs\WP\ModuleLoader\register;

if ( function_exists( 'add_action' ) ) {
	add_action(
		'plugins_loaded',
		function () {
			register(
				array(
					'name'     => 'wp-module-solutions',
					'label'    => __( 'wp-module-solutions', 'wp-module-solutions' ),
					'callback' => function ( Container $container ) {
						new WPSolutions( $container );
						define( 'NFD_ECOMMERCE_DIR', __DIR__ );
						define( 'NFD_ECOMMERCE_BUILD_DIR', __DIR__ . '/build/' );
						define( 'NFD_ECOMMERCE_PLUGIN_URL', $container->plugin()->url );
						define( 'NFD_ECOMMERCE_PLUGIN_DIRNAME', dirname( $container->plugin()->basename ) );
					},
					'isActive' => true,
					'isHidden' => true,
				)
			);
		}
	);

}
