// <reference types="Cypress" />
const entitlementsFixture = require( '../fixtures/entitlements.json' );

describe( 'My Plugins and Tools in Plugin App', function () {
	// path to the entitlements json to load into transient
	const entitlementsjson =
		'vendor/newfold-labs/wp-module-solutions/tests/cypress/fixtures/entitlements.json';

	after( () => {
		cy.exec(
			`npx wp-env run cli wp transient delete nfd_site_capabilities`
		);
		cy.exec( `npx wp-env run cli wp transient delete newfold_solutions` );
		cy.exec( `npx wp-env run cli wp option delete nfd_data_token` );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools tab does not display without solution', () => {
		cy.exec(
			`npx wp-env run cli wp transient delete nfd_site_capabilities`
		);
		cy.exec( `npx wp-env run cli wp transient delete newfold_solutions` );

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
		// drop test entitlements into transient
		cy.exec(
			`npx wp-env run cli wp option set _transient_newfold_solutions --format=json < ${ entitlementsjson }`
		);
		// spoof hiive connection
		cy.exec( `npx wp-env run cli wp option set nfd_data_token 'xyc123'` );
		// Set hasSolution:true in capabilities
		cy.exec(
			`npx wp-env run cli wp option set _transient_nfd_site_capabilities '{"hasSolution": true}' --format=json`
		);
		// Set a long timeout for the transients
		cy.exec(
			`npx wp-env run cli wp option set _transient_timeout_newfold_solutions 4102444800`
		);
		cy.exec(
			`npx wp-env run cli wp option set _transient_timeout_nfd_site_capabilities 4102444800`
		);

		// reload plugin install page
		cy.reload( true );
		cy.visit( '/wp-admin/plugin-install.php' );

		// check that my plugins and tools tab displays when capabilities.hasSolution is true
		cy.get(
			'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
		).should( 'be.visible' );

		// check that entitlement plugins load
		cy.visit( '/wp-admin/plugin-install.php?tab=nfd_my_plugins_and_tools' );

		cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
			'be.visible'
		);

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
