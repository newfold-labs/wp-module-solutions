<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\Module\Data\HiiveConnection;
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Controller;
use WP_REST_Response;
use WP_REST_Server;

/**
 * Class EntitlementsApi
 */
class EntitlementsApi {

	/**
	 * Transient name where data is stored.
	 */
	const TRANSIENT = 'newfold_solutions';

	/**
	 * Hiive API endpoint for fetching site entitlements.
	 */
	const HIIVE_API_ENTITLEMENTS_ENDPOINT = 'sites/v1/entitlements';

	/**
	 * Instance of the HiiveConnection class.
	 *
	 * @var HiiveConnection
	 */
	private $hiive;

	/**
	 * EntitilementsApi constructor.
	 *
	 * @param HiiveConnection $hiive           Instance of the HiiveConnection class.
	 */
	public function __construct( HiiveConnection $hiive ) {
		$this->hiive     = $hiive;
		$this->namespace = 'newfold-solutions/v1';
		$this->rest_base = '/entitlements';
	}

	/**
	 * Register Entitlement routes.
	 */
	public function register_routes() {

		// Add route for fetching entitlements
		register_rest_route(
			$this->namespace,
			$this->rest_base,
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => function () {
					return current_user_can( 'read' );
				},
			)
		);
	}

	/**
	 * Set the transient where entitlements are stored (6 Hours).
	 *
	 * @param array     $data 
	 * @param float|int $expiration    Transient expiration.
	 */
	public function setTransient( $data, $expiration = 21600 ) {
		set_transient( self::TRANSIENT, $data, $expiration );
	}

	/**
	 * Get entitlements of a site.
	 *
	 *
	 * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function get_items() {

		// for debugging - use a local json file rather than hiive entitlement endpoint response
		return file_get_contents( NFD_SOLUTIONS_DIR . '/includes/js/debug.json');

		// If there is no Hiive connection, bail.
		if(! HiiveConnection::is_connected()) {
			return;
		}

		$entitlements = get_transient( self::TRANSIENT );

		if ( false === $entitlements ) {

			$args = array(
				'method' => 'GET'
			);
	
			$hiive_response = $this->hiive->hiive_request( self::HIIVE_API_ENTITLEMENTS_ENDPOINT, array(), $args );
	
			if ( is_wp_error( $hiive_response ) ) {
				return new \WP_REST_Response( $hiive_response->get_error_message(), 401 );
			}
	
			$status_code = wp_remote_retrieve_response_code( $hiive_response );
	
			if ( 200 !== $status_code ) {
				return new \WP_REST_Response( wp_remote_retrieve_response_message( $hiive_response ), $status_code );
			}
	
			$entitlements = json_decode( wp_remote_retrieve_body( $hiive_response ) );
			$this->setTransient( $entitlements );

		}

		return new \WP_REST_Response( $entitlements, 201 );
	}

}
