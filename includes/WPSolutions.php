<?php

namespace NewfoldLabs\WP\Module\WPSolutions;

use NewfoldLabs\WP\ModuleLoader\Container;

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
}
