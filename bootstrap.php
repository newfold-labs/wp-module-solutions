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
					},
					'isActive' => true,
					'isHidden' => true,
				)
			);
		}
	);

}
