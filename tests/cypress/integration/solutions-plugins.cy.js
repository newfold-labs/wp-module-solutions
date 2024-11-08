// <reference types="Cypress" />
import { wpLogin, wpCli } from '../wp-module-support/utils.cy';

// path to the entitlements json to load into transient
const entitlementsjson =
	'vendor/newfold-labs/wp-module-solutions/tests/cypress/fixtures/entitlements.json';

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
		wpCli( `transient delete newfold_solutions` );
		wpCli( `option delete nfd_data_token` );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools tab does not display without solution', () => {
		wpCli( `transient delete nfd_site_capabilities` );
		wpCli( `transient delete newfold_solutions` );

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
		// set transient expiration to one hour from now
		const expiry = Math.floor( new Date().getTime() / 1000.0 ) + 3600;

		// spoof hiive connection
		wpCli( `option update nfd_data_token 'xyc123'` );
		// Set hasSolution:true in capabilities
		wpCli(
			`option update _transient_nfd_site_capabilities '{"hasSolution": true}' --format=json`
		);
		// add test entitlements into transient
		wpCli(
			`option update _transient_newfold_solutions --format=json < ${ entitlementsjson }`
		);
		// manually set expiration for the transients
		wpCli(
			`option update _transient_timeout_nfd_site_capabilities ${ expiry }`
		);
		wpCli( `option update _transient_timeout_newfold_solutions ${ expiry }` );

		// load plugin install page
		cy.visit( '/wp-admin/plugin-install.php' );
		cy.reload();

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
		} );

		// check that my plugins and tools tab displays when capabilities.hasSolution is true
		cy.get(
			'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
		).should( 'be.visible' );

		// check that entitlement plugins load
		cy.visit( '/wp-admin/plugin-install.php?tab=nfd_my_plugins_and_tools' );
		cy.reload( true );

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
