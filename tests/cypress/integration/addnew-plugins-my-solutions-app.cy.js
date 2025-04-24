// <reference types="Cypress" />
import {
	wpLogin,
	setSolution,
	clearSolutionTransient,
} from '../wp-module-support/utils.cy';

describe(
	'My Solutions on Plugin Install Page',
	{ testIsolation: true },
	() => {
		beforeEach( () => {
			wpLogin();
			cy.visit( '/wp-admin/index.php' );
		} );

		after( () => {
			// clear solution transient
			clearSolutionTransient();
		} );

		it( 'The Bluehost brand logo is shown on Bluehost solutions tab', () => {
			setSolution( 'none' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=none'
			);

			cy.window().then( ( win ) => {
				cy.log(
					`NewFold solution: ${ win.NewfoldSolutions.solution }`
				);
			} );

			cy.get( '.plugin-install-nfd_solutions' )
				.find( 'a' )
				.find( 'svg' )
				.scrollIntoView()
				.should( 'be.visible' );
		} );

		it( 'My Solution page is rendered with no solution', () => {
			setSolution( 'none' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=none'
			);

			cy.window().then( ( win ) => {
				cy.log(
					`NewFold solution: ${ win.NewfoldSolutions.solution }`
				);
			} );

			cy.get( '#nfd-add-new-app h1' )
				.contains( 'Premium tools available' )
				.scrollIntoView()
				.should( 'be.visible' );
		} );

		it( 'My Solution page is rendered with Commerce solution', () => {
			setSolution( 'commerce' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			cy.window().then( ( win ) => {
				cy.log(
					`NewFold solution: ${ win.NewfoldSolutions.solution }`
				);
			} );

			cy.get( '#nfd-add-new-app h1' )
				.contains( 'Powerful Plugins Included' )
				.scrollIntoView()
				.should( 'be.visible' );
		} );

		it( 'My Solution page is rendered with Creator solution', () => {
			setSolution( 'creator' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=creator'
			);

			cy.window().then( ( win ) => {
				cy.log(
					`NewFold solution: ${ win.NewfoldSolutions.solution }`
				);
			} );

			cy.get( '#nfd-add-new-app h1' )
				.contains( 'Powerful Plugins Included' )
				.scrollIntoView()
				.should( 'be.visible' );

			cy.get( '.nfd-solutions-upgrade-banner' )
				.contains( 'h2', 'Upgrade' )
				.scrollIntoView()
				.should( 'be.visible' );
		} );

		it( 'My Solution page is rendered with Service solution', () => {
			setSolution( 'service' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=service'
			);

			cy.window().then( ( win ) => {
				cy.log(
					`NewFold solution: ${ win.NewfoldSolutions.solution }`
				);
			} );

			cy.get( '#nfd-add-new-app h1' )
				.contains( 'Powerful Plugins Included' )
				.scrollIntoView()
				.should( 'be.visible' );

			cy.get( '.nfd-solutions-upgrade-banner' )
				.contains( 'h2', 'Upgrade' )
				.scrollIntoView()
				.should( 'be.visible' );
		} );
	}
);
