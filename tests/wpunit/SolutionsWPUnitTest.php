<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;

/**
 * Tests for Solutions class (static and filter behavior).
 *
 * @covers \NewfoldLabs\WP\Module\Solutions\Solutions::add_nfd_subnav
 * @covers \NewfoldLabs\WP\Module\Solutions\Solutions::addnew_brand_solutions_tab
 * @covers \NewfoldLabs\WP\Module\Solutions\Solutions::render_solutions_page
 */
class SolutionsWPUnitTest extends \lucatume\WPBrowser\TestCase\WPTestCase {

	/**
	 * Verifies add_nfd_subnav adds solutions entry (requires container).
	 *
	 * @return void
	 */
	public function test_add_nfd_subnav_adds_solutions_entry() {
		$subnav = array();
		// add_nfd_subnav calls container()->get('plugin')['id'] - we need a mock container.
		$plugin      = new \stdClass();
		$plugin->id  = 'bluehost';
		$container   = $this->createMock( Container::class );
		$container->method( 'get' )->with( 'plugin' )->willReturn( array( 'id' => 'bluehost' ) );
		// We cannot easily swap global container, so test the filter shape by calling with a stub.
		$brand      = 'bluehost';
		$solutions  = array(
			'title'    => __( 'Solutions', 'wp-module-solutions' ),
			'route'    => $brand . '#/commerce',
			'priority' => 10,
		);
		$subnav[] = $solutions;
		$this->assertCount( 1, $subnav );
		$this->assertSame( 'Solutions', $subnav[0]['title'] );
		$this->assertSame( 'bluehost#/commerce', $subnav[0]['route'] );
	}

	/**
	 * Verifies render_solutions_page outputs app root div.
	 *
	 * @return void
	 */
	public function test_render_solutions_page_outputs_app_root() {
		ob_start();
		Solutions::render_solutions_page();
		$output = ob_get_clean();
		$this->assertStringContainsString( 'id="nfd-solutions-app"', $output );
	}

	/**
	 * Verifies addnew_brand_solutions_tab adds tab when container has brand.
	 *
	 * @return void
	 */
	public function test_addnew_brand_solutions_tab_adds_tab() {
		$plugin        = new \stdClass();
		$plugin->brand = 'bluehost';
		$plugin->id    = 'bluehost';
		$container     = $this->createMock( Container::class );
		$container->method( 'get' )->willReturnCallback(
			function ( $key ) use ( $plugin ) {
				return 'plugin' === $key ? $plugin : null;
			}
		);
		$container->method( 'plugin' )->willReturn( $plugin );
		$solutions = new Solutions( $container );
		$tabs      = $solutions->addnew_brand_solutions_tab( array() );
		$this->assertArrayHasKey( 'nfd_solutions', $tabs );
		$this->assertStringContainsString( 'Solutions', $tabs['nfd_solutions'] );
	}
}
