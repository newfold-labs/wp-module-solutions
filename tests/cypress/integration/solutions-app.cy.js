// <reference types="Cypress" />

describe( 'My Plugins and Tools in Plugin App', function () {
	beforeEach( () => {
		cy.visit( '/wp-admin/index.php' );

		// we should move the debug.json entitlement response into a fixture.
		// for now this test will work if debug mode is on since it will load the debug data.
		// also need to devise a way to set capabilities via cli command for testing with/without solutions.
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools nav does not display without solution', () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = false;
					} );
				},
			}
		);
		cy.get('a.wppbh-app-navitem[href="#/my_plugins_and_tools"]').should('not.exist');
	} );

	// check that my plugins and tools displays when capabilities.hasSolution is true
	it( 'My Plugins & Tools nav displays with Solution', () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = true;
					} );
				},
			}
		);
		cy.get('a.wppbh-app-navitem[href="#/my_plugins_and_tools"]').should('be.visible');
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
		
		cy.get('a.wppbh-app-navitem[href="#/my_plugins_and_tools"]').should('be.visible');
		
		cy.get( '.newfold-entitlements-container' )
			.contains( 'h2', 'Tools' )
			.scrollIntoView()
			.should( 'be.visible' );
		
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'Core Tools' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h4', 'Jetpack')
			.scrollIntoView()
			.should( 'be.visible' );
		
		// test accordion functionality
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'Core Tools' )
			.click();

		// accordion closed
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h4', 'Jetpack')
			.should( 'not.exist' );
	} );

	// test entitlement button case states 
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
		

} );
