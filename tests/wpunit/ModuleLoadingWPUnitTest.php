<?php

namespace NewfoldLabs\WP\Module\Solutions;

/**
 * Module loading wpunit tests.
 *
 * @coversNothing
 */
class ModuleLoadingWPUnitTest extends \lucatume\WPBrowser\TestCase\WPTestCase {

	/**
	 * Verify WordPress factory is available.
	 *
	 * @return void
	 */
	public function test_wordpress_factory_available() {
		$this->assertTrue( function_exists( 'get_option' ) );
		$this->assertNotEmpty( get_option( 'blogname' ) );
	}

	/**
	 * Verify add_action exists (bootstrap uses it).
	 *
	 * @return void
	 */
	public function test_wordpress_hooks_available() {
		$this->assertTrue( function_exists( 'add_action' ) );
		$this->assertTrue( function_exists( 'add_filter' ) );
	}

	/**
	 * Verify Solutions and EntitlementsApi classes exist.
	 *
	 * @return void
	 */
	public function test_solutions_classes_exist() {
		$this->assertTrue( class_exists( Solutions::class ) );
		$this->assertTrue( class_exists( EntitlementsApi::class ) );
		$this->assertTrue( class_exists( SolutionsUpsell::class ) );
		$this->assertTrue( class_exists( I18nService::class ) );
	}

	/**
	 * Verify EntitlementsApi constants.
	 *
	 * @return void
	 */
	public function test_entitlements_api_constants() {
		$this->assertSame( 'newfold_solutions', EntitlementsApi::TRANSIENT );
		$this->assertSame( '/sites/v1/entitlements', EntitlementsApi::HIIVE_API_ENTITLEMENTS_ENDPOINT );
		$this->assertIsArray( EntitlementsApi::$default_response );
		$this->assertArrayHasKey( 'entitlements', EntitlementsApi::$default_response );
	}
}
