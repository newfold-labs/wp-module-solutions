// <reference types="Cypress" />
import { wpLogin, wpCli } from '../wp-module-support/utils.cy';

describe( 'My Solution under Plugins > Add new', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );

	} );

	after( () => {
		wpCli( `transient delete nfd_site_capabilities` );
	} );

    // since the test site is not connected to hiive, it will not have a solution
    it( 'The Bluehost brand logo is showed on Bluehost solutions tab', () => {

        cy.visit( '/wp-admin/plugin-install.php?tab=nfd_solutions' );

        cy.window().then( ( win ) => {

            cy.log(
                `NewFold solution: ${ win.NewfoldSolutions.solution }`
            )
        } );

        cy.get( '.plugin-install-nfd_solutions' )
            .find('a').find('svg')
            .scrollIntoView()
            .should( 'be.visible' );
    } );

	it( 'My Solution page is rendered with no solution', () => {

        cy.visit( '/wp-admin/plugin-install.php?tab=nfd_solutions' );

        cy.window().then( ( win ) => {

            cy.log(
                `NewFold solution: ${ win.NewfoldSolutions.solution }`
            )
        } );

		cy.get( '#nfd-add-new-app' )
			.contains( 'h1', 'Premium tools available in our Solutions' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );
} );
