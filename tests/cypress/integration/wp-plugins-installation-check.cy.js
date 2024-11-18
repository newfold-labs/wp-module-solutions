// <reference types="Cypress" />
const entitlementsFixture = require( '../fixtures/entitlements.json' );
// path to the entitlements json to load into transient
const entitlementsjson =
	'vendor/newfold-labs/wp-module-solutions/tests/cypress/fixtures/entitlements.json';
const customCommandTimeout = 20000;
// wp cli wrapper
const wpcli = ( cmd ) => {
	cy.exec( `npx wp-env run cli wp ${ cmd }`, {
		env: {
			NODE_TLS_REJECT_UNAUTHORIZED: '1',
		},
	} ).then( ( result ) => {
		for ( const [ key, value ] of Object.entries( result ) ) {
			cy.log( `${ key }: ${ value }` );
		}
	} );
};

describe( 'My Plugins and Tools in Plugin App', function () {
	after( () => {
		wpcli( `option delete _transient_nfd_site_capabilities` );
		wpcli( `option delete _transient_newfold_solutions` );
		wpcli( `option delete nfd_data_token` );
	} );

	// check that it does not display when capabilities.hasSolution is false
	it( 'My Plugins & Tools tab does not display without solution Jetpack check', () => {
		wpcli( `option delete _transient_nfd_site_capabilities` );
		wpcli( `option delete _transient_newfold_solutions` );
		cy.visit( '/wp-admin/plugins.php', {
			timeout: customCommandTimeout,
		} );

		cy.get( '#the-list' ).within( () => {
			cy.get( 'tr[data-slug="jetpack"]' ).should( 'not.exist' );
		} );
		cy.get( '#the-list' ).within( () => {
			cy.get( 'tr[data-slug="wordpress-seo"]' ).should( 'not.exist' );
		} );

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
		wpcli(
			`option set _transient_nfd_site_capabilities '{"hasSolution": true}' --format=json`
		);
		// spoof hiive connection
		wpcli( `option set nfd_data_token 'xyc123'` );
		// Set a long timeout for the transients
		wpcli( `option set _transient_timeout_newfold_solutions 4102444800` );
		wpcli(
			`option set _transient_timeout_nfd_site_capabilities 4102444800`
		);
		// add test entitlements into transient
		wpcli(
			`option set _transient_newfold_solutions --format=json < ${ entitlementsjson }`
		);

		// reload plugin install page
		cy.reload( true );
		cy.visit( '/wp-admin/plugin-install.php' );
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

		cy.get( 'h3.nfd-solutions-availble-list-item-title', {
			timeout: customCommandTimeout,
		} )
			.contains( 'Jetpack' )
			.parent( 'div.details' )
			.find( '.nfd-solutions-availble-list-item-button' )
			.should( 'be.visible' )
			.click();
		cy.wait( 10000 );
		cy.visit( '/wp-admin/plugins.php' );
		cy.reload( true );
		cy.wait( 10000 );
		cy.get( '#the-list', {
			timeout: customCommandTimeout,
		} ).within( () => {
			cy.get( 'tr[data-slug="jetpack"]', {
				timeout: customCommandTimeout,
			} ).should( 'exist' );

			cy.get( '.nfd-solutions-availble-list' )
				.contains( 'h3', 'Yoast SEO' )
				.scrollIntoView()
				.should( 'be.visible' );

			cy.get( 'h3.nfd-solutions-availble-list-item-title', {
				timeout: customCommandTimeout,
			} )
				.contains( 'Yoast SEO' )
				.parent( 'div.details' )
				.find( '.nfd-solutions-availble-list-item-button' )
				.should( 'be.visible' )
				.click();
			cy.wait( 10000 );
			cy.visit( '/wp-admin/plugins.php', {
				timeout: customCommandTimeout,
			} );
			cy.reload( true );
			cy.wait( 10000 );
			cy.get( '#the-list', {
				timeout: customCommandTimeout,
			} ).within( () => {
				cy.get( 'tr[data-slug="wordpress-seo"]', {
					timeout: customCommandTimeout,
				} ).should( 'exist' );
			} );
		} );
	} );

	// test each entitlement button case state
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
} );
