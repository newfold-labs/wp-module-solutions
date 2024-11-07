// <reference types="Cypress" />
const entitlementsFixture = require( '../fixtures/entitlements.json' );
const customCommandTimeout = 20000;
describe( 'My Plugins and Tools in Plugin App', function () {
	beforeEach( () => {
		cy.visit( '/wp-admin/index.php' );
	} );

	it( 'Verify if Jetpack plugin is installed', () => {
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
		cy.visit( '/wp-admin/plugins.php' );
		cy.get( 'body' ).then( ( $body ) => {
			if ( $body.find( '[data-plugin="jetpack/jetpack.php"]' ).length ) {
				cy.get( '[title="My Jetpack dashboard"]' ).should(
					'be.visible'
				);
			} else {
				cy.visit(
					'/wp-admin/plugin-install.php?tab=nfd_my_plugins_and_tools'
				);
				cy.get(
					"//h3[@class='nfd-solutions-availble-list-item-title' and text()='Jetpack']//parent::div[@class='details']//*[@class='nfd-solutions-availble-list-item-button']",
					{ timeout: customCommandTimeout }
				)
					.should( 'be.visible' )
					.click();
				cy.visit( '/wp-admin/plugins.php' );
				cy.get( '[title="My Jetpack dashboard"]' ).should(
					'be.visible'
				);
			}
		} );
	} );
} );
