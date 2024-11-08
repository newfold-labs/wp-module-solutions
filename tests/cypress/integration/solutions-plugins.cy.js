// <reference types="Cypress" />
import { wpLogin, wpCli, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements.json' );

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools tab does not display without solution', () => {
		wpCli( `transient delete nfd_site_capabilities` );

		// need a cli command to set a capability before a test
		cy.visit( '/wp-admin/plugin-install.php' );
		// check that my plugins and tools tab displays when capabilities.hasSolution is true
		cy.get(
			'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
		).should( 'not.exist' );
		cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
			'not.exist'
		);
	} );

	it( 'My Plugins & Tools exists', () => {
		// Set hasSolution:true in capabilities
		setCapability( { hasSolution: true } );

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

		// check that entitlement plugins load
		cy.url().should( 'contain', 'nfd_my_plugins_and_tools' );

		cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
			'be.visible'
		);

		cy.get( '.nfd-solutions-availble-list' ).should( 'exist' );

		cy.get( '.nfd-solutions-availble-list' )
			.contains( 'h3', 'Jetpack' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-solutions-availble-list' )
			.contains( 'h3', 'Yoast SEO' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	// test each entitlement button case state
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
} );
