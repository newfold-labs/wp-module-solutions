// <reference types="Cypress" />
import { wpLogin, wpCli, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements-premium.json' );

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
	} );

	// since the test site is not connected to hiive, it will not have a solution
	it( 'Solutions page displays upgrade for those with no solution', () => {
		// Set hasSolution:true in capabilities
		setCapability( { hasSolution: true } );

		cy.visit( '/wp-admin/admin.php?page=solutions' );

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
		} );

		cy.get( '#nfd-solutions-app' )
			.contains( 'h1', 'Premium tools available in our Solutions' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-solutions-upgrade-banner' )
			.contains( 'h2', 'Upgrade' )
			.scrollIntoView()
			.should( 'be.visible' );

	} );

	// test entitlement button case states
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
} );
