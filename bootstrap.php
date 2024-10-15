<?php

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\Solutions\Solutions;

use function NewfoldLabs\WP\ModuleLoader\register;

if ( function_exists( 'add_action' ) ) {
	add_action(
		'plugins_loaded',
		function () {
			register(
				array(
					'name'     => 'wp-module-solutions',
					'label'    => __( 'Solutions', 'wp-module-solutions' ),
					'callback' => function ( Container $container ) {
						new Solutions( $container );
						define( 'NFD_SOLUTIONS_DIR', __DIR__ );
						define( 'NFD_SOLUTIONS_BUILD_DIR', __DIR__ . '/build/' );
						define( 'NFD_SOLUTIONS_PLUGIN_URL', $container->plugin()->url );
						define( 'NFD_SOLUTIONS_PLUGIN_DIRNAME', dirname( $container->plugin()->basename ) );
					},
					'isActive' => true,
					'isHidden' => true,
				)
			);
		}
	);

}
