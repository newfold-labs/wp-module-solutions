// <reference types="Cypress" />
import { wpLogin, wpCli, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements.json' );

// test each entitlement button case state
// 1. plugin already installed and active
// 2. plugin already installed but not active
// 3. free plugin not installed, needs appropriate installer attributes
// 4. premium plugin not installed, needs appropriate pls attributes

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
		wpCli( `plugin uninstall wordpress-seo --deactivate`, false );
	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
		// uninstall yoast plugins
		wpCli( `plugin uninstall wordpress-seo --deactivate`, false );
	} );

	// verify plugins are not yet installed
	it( 'Yoast and Jetpack not installed', () => {
		cy.visit( '/wp-admin/plugins.php' );

		cy.get( '#the-list' ).within( () => {
			cy.get( 'tr[data-slug="jetpack"]' ).should( 'not.exist' );
		} );
		cy.get( '#the-list' ).within( () => {
			cy.get( 'tr[data-slug="wordpress-seo"]' ).should( 'not.exist' );
		} );
	} );

	// check a pls plugin has correct attributes on button
	// cannot fully test pls install here because the site is not hiive registered
	// and the pls endpoint requires a site and user with solution add-on
	it( 'PLS plugin has proper attributes', () => {
		// Set hasSolution:true in capabilities
		setCapability( { hasSolution: true } );

		// entitlements intercept
		cy.intercept(
			{
				method: 'GET',
				url: /newfold-solutions(\/|%2F)v1(\/|%2F)entitlements/,
			},
			{
				body: entitlementsFixture,
				delay: 100,
			}
		).as( 'getEntitlements' );

		// load plugin install page
		cy.visit( '/wp-admin/plugin-install.php' );

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
		} );

		// check that my plugins and tools tab displays when capabilities.hasSolution is true
		cy.get(
			'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
		)
			.should( 'be.visible' )
			.click();

		cy.wait( '@getEntitlements' );

		cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
			'be.visible'
		);

		cy.get( '.nfd-solutions-availble-list' ).should( 'exist' );

		// Advanced Reviews is listed
		cy.get( '.nfd-solutions-availble-list' )
			.contains( 'h3', 'Advanced Reviews' )
			.scrollIntoView()
			.should( 'be.visible' );

		// installer attributes are correct
		cy.get( '.nfd-solutions-advanced-reviews-button' ).should(
			'have.attr',
			'title',
			'Install Premium Plugin'
		);
		cy.get( '.nfd-solutions-advanced-reviews-button' ).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Advanced Reviews'
		);
		cy.get( '.nfd-solutions-advanced-reviews-button' ).should(
			'have.attr',
			'data-nfd-installer-pls-slug',
			'yith-woocommerce-advanced-reviews'
		);
		cy.get( '.nfd-solutions-advanced-reviews-button' ).should(
			'have.attr',
			'data-nfd-installer-pls-provider',
			'yith'
		);
		cy.get( '.nfd-solutions-advanced-reviews-button' )
			.should( 'have.attr', 'data-nfd-installer-plugin-url' )
			.then( ( href ) => {
				expect( href.includes( 'yith_ywar_panel' ) ).to.be.true;
			} );
		cy.get( '.nfd-solutions-advanced-reviews-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yith_ywar_panel' ) ).to.be.true;
			} );
	} );

	// test free Yoast SEO plugin install functions
	it( 'Yoast SEO plugin installs properly', () => {
		// Set hasSolution:true in capabilities
		setCapability( { hasSolution: true } );

		// entitlements intercept
		cy.intercept(
			{
				method: 'GET',
				url: /newfold-solutions(\/|%2F)v1(\/|%2F)entitlements/,
			},
			{
				body: entitlementsFixture,
				delay: 100,
			}
		).as( 'getEntitlements' );

		// load plugin install page
		cy.visit( '/wp-admin/plugin-install.php' );

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
		} );

		// check that my plugins and tools tab displays when capabilities.hasSolution is true
		cy.get(
			'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
		)
			.should( 'be.visible' )
			.click();

		cy.wait( '@getEntitlements' );

		cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
			'be.visible'
		);

		cy.get( '.nfd-solutions-availble-list' ).should( 'exist' );

		// yoast is listed
		cy.get( '.nfd-solutions-availble-list' )
			.contains( 'h3', 'Yoast SEO' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-solutions-yoast-seo-button' ).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Yoast SEO'
		);
		cy.get( '.nfd-solutions-yoast-seo-button' ).should(
			'have.attr',
			'data-nfd-installer-download-url',
			'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip'
		);
		cy.get( '.nfd-solutions-yoast-seo-button' )
			.should( 'have.attr', 'data-nfd-installer-plugin-url' )
			.then( ( href ) => {
				expect( href.includes( 'wpseo_dashboard' ) ).to.be.true;
			} );
		cy.get( '.nfd-solutions-yoast-seo-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-slug'
		);
		cy.get( '.nfd-solutions-yoast-seo-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-provider'
		);

		// install jetpack
		cy.get( '.nfd-solutions-yoast-seo-button' ).click();

		// verify install modal opens
		cy.get( '.nfd-installer-modal__content' ).should( 'be.visible' );
		cy.get( '.nfd-installer-modal__content-subheading' ).contains(
			'Yoast'
		);
		// verify modal closes
		cy.get( '.nfd-installer-modal__content', {
			timeout: 20000,
		} ).should( 'not.exist' );
		cy.wait( 2000 );

		// verify redirect occurred
		cy.url().should( 'contain', 'wpseo_dashboard' );

		// reload plugin list
		cy.visit( '/wp-admin/plugins.php' );

		// verify wordpress-seo is installed
		cy.get( 'tr[data-slug="wordpress-seo"]' )
			.scrollIntoView()
			.should( 'be.visible' );

		// verify wordpress-seo is active
		cy.get( 'a#deactivate-wordpress-seo' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );
} );
