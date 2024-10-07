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
	const HIIVE_API_ENTITLEMENTS_ENDPOINT = '/sites/v1/entitlements';

	/**
	 * Instance of the HiiveConnection class.
	 *
	 * @var HiiveConnection
	 */
	private $hiive;
	private $namespace;
	private $rest_base;

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
					return current_user_can( 'manage_options' );
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

		// If there is no Hiive connection, bail.
		if( ! HiiveConnection::is_connected()) {
			if ( defined('WP_DEBUG') && true === WP_DEBUG ) {
				// for debugging - use a local json file rather than hiive entitlement endpoint response
				return new WP_REST_Response( json_decode( file_get_contents( NFD_SOLUTIONS_DIR . '/includes/js/debug.json' ) ), 218 );
			}
			return new WP_REST_Response( array( 'message' => 'Not allowed to load entitlements from server.' ), 403 );
		}

		$entitlements = get_transient( self::TRANSIENT );

		if ( false === $entitlements ) {

			$response = wp_remote_get(
				NFD_HIIVE_URL . self::HIIVE_API_ENTITLEMENTS_ENDPOINT,
				array(
					'headers' => array(
						'Content-Type'  => 'application/json',
						'Accept'        => 'application/json',
						'Authorization' => 'Bearer ' . HiiveConnection::get_auth_token(),
					),
				)
			);
			
			if ( is_wp_error( $response ) ) {
				return new WP_REST_Response( array( 'message' => 'An error occurred with the entitlements response.' ), 500 );
			}

			$body = wp_remote_retrieve_body( $response );
			$data = json_decode( $body, true );
			if (
				$data &&
				is_array( $data ) &&
				array_key_exists('solutions', $data) &&
				array_key_exists('categories', $data)
			) {
				$entitlements = $data;
			}
		}

		return new WP_REST_Response( $entitlements, 200 );
	}

}