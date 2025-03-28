// <reference types="Cypress" />
import { wpLogin, wpCli, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements.json' );

describe.skip( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools nav does not display without solution', () => {
		// Set hasSolution:false in capabilities
		setCapability( { hasSolution: false } );

		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/'
		);
		cy.get( 'a.wppbh-app-navitem[href="#/my_plugins_and_tools"]' ).should(
			'not.exist'
		);
	} );

	// check that my plugins and tools displays when capabilities.hasSolution is true
	it( 'My Plugins & Tools displays with Solution', () => {
		// Set hasSolution:true in capabilities
		setCapability( { hasSolution: true } );

		// set up the intercept for entitlements
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

		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/'
		);

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
		} );

		cy.get( 'a.wppbh-app-navitem[href="#/my_plugins_and_tools"]' )
			.should( 'be.visible' )
			.click();

		cy.wait( '@getEntitlements', { timeout: 10000 } );

		cy.get( '.newfold-entitlements-container' )
			.contains( 'h2', 'Plugins & Tools' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Core Tools' )
			.scrollIntoView()
			.should( 'be.visible' );

		// accordion closed
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'Jetpack' )
			.should( 'not.exist' );

		// test accordion functionality
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Core Tools' )
			.click();

		// accordion opened
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'Jetpack' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	// test entitlement button case states
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
} );
