// <reference types="Cypress" />
const entitlementsFixture = require( '../fixtures/entitlements.json' );

describe( 'My Plugins and Tools in Plugin App', function () {
	beforeEach( () => {
		cy.visit( '/wp-admin/index.php' );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools nav does not display without solution', () => {
		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = false;
					} );
				},
			}
		);
		cy.get( 'a.wppbh-app-navitem[href="#/my_plugins_and_tools"]' ).should(
			'not.exist'
		);
	} );

	// check that my plugins and tools displays when capabilities.hasSolution is true
	it( 'My Plugins & Tools nav displays with Solution', () => {
		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = true;
					} );
				},
			}
		);
		cy.get( 'a.wppbh-app-navitem[href="#/my_plugins_and_tools"]' ).should(
			'be.visible'
		);
	} );

	// check that entitlement categories load in accordions
	it( 'Entitlements Display with Solution', () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/my_plugins_and_tools',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = true;
					} );
				},
			}
		);

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
		cy.wait( '@getEntitlements' );

		cy.get( 'a.wppbh-app-navitem[href="#/my_plugins_and_tools"]' ).should(
			'be.visible'
		);

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
