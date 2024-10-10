// <reference types="Cypress" />

describe( 'My Plugins and Tools in Plugin App', function () {
	beforeEach( () => {
		cy.visit( '/wp-admin/plugin-install.php' );
	} );

	it( 'Tab exists', () => {
        cy.visit( '/wp-admin/plugin-install.php' );
        // check that my plugins and tools tab displays when capabilities.hasSolution is true
        // check that it does not display when capabilities.hasSolution is false
        
        // check that entitlement plugins load
        cy.visit( '/wp-admin/plugin-install.php?tab=nfd_my_plugins_and_tools' );
        
		
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools tab does not display without solution', () => {
		// need a cli command to set a capability before a test
		cy.visit(
			'/wp-admin/plugin-install.php',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = false;
					} );
				},
			}
		);

		cy.get('.plugin-install-nfd_my_plugins_and_tools').should('not.exist');
	} );

	// check that my plugins and tools displays when capabilities.hasSolution is true
	it( 'My Plugins & Tools tab displays with Solution', () => {
		cy.visit(
			'/wp-admin/plugin-install.php',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.capabilities.hasSolution = true;
					} );
				},
			}
		);
		cy.get('.plugin-install-nfd_my_plugins_and_tools').should('be.visible');
	} );


	// test each entitlement button case state
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes

} );
