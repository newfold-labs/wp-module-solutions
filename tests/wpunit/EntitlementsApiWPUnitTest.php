<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\Module\Data\HiiveConnection;
use WP_REST_Request;

/**
 * Tests for EntitlementsApi.
 *
 * @covers \NewfoldLabs\WP\Module\Solutions\EntitlementsApi
 */
class EntitlementsApiWPUnitTest extends \lucatume\WPBrowser\TestCase\WPTestCase {

	/**
	 * EntitlementsApi instance under test.
	 *
	 * @var EntitlementsApi
	 */
	private $api;

	/**
	 * Set up test.
	 *
	 * @return void
	 */
	public function setUp(): void {
		parent::setUp();
		$hiive     = $this->createMock( HiiveConnection::class );
		$this->api = new EntitlementsApi( $hiive );
	}

	/**
	 * Verifies register_routes registers REST routes.
	 *
	 * Routes must be registered on rest_api_init to avoid incorrect usage notice.
	 *
	 * @return void
	 */
	public function test_register_routes_adds_entitlements_route() {
		add_action( 'rest_api_init', array( $this->api, 'register_routes' ) );
		do_action( 'rest_api_init' );
		$server = rest_get_server();
		$this->assertNotNull( $server );
		$routes = $server->get_routes();
		$this->assertArrayHasKey( '/newfold-solutions/v1/entitlements', $routes );
		$this->assertArrayHasKey( '/newfold-solutions/v1/activate_plugin', $routes );
	}

	/**
	 * Verifies set_the_transient and get_entitlements_data round-trip.
	 *
	 * @return void
	 */
	public function test_set_transient_stores_data() {
		$data = array(
			'entitlements' => array(),
			'categories'   => array(),
		);
		$this->api->set_the_transient( $data, 60 );
		$response = $this->api->get_entitlements_data();
		$this->assertInstanceOf( \WP_REST_Response::class, $response );
		$this->assertSame( 200, $response->get_status() );
		$this->assertSame( $data, $response->get_data() );
	}

	/**
	 * Verifies get_entitlements_data returns default when no connection and no transient.
	 *
	 * @return void
	 */
	public function test_get_entitlements_data_returns_default_when_no_transient() {
		delete_transient( EntitlementsApi::TRANSIENT );
		$response = $this->api->get_entitlements_data();
		$this->assertInstanceOf( \WP_REST_Response::class, $response );
		$this->assertSame( 200, $response->get_status() );
		$this->assertSame( EntitlementsApi::$default_response, $response->get_data() );
	}

	/**
	 * Verifies activate_plugins returns error for invalid body.
	 *
	 * @return void
	 */
	public function test_activate_plugins_returns_error_for_invalid_plugin() {
		$request = new WP_REST_Request( 'POST' );
		$request->set_body( wp_json_encode( array( 'plugin' => '' ) ) );
		$response = $this->api->activate_plugins( $request );
		$this->assertInstanceOf( \WP_Error::class, $response );
		$this->assertSame( 'nfd_module_solution_error', $response->get_error_code() );
	}
}
