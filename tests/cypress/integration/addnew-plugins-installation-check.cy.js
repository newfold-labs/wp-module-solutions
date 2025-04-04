// <reference types="Cypress" />
import { wpLogin } from '../wp-module-support/utils.cy';

describe(
	'My Solutions on Plugin Install Page - Entitlements Check',
	{ testIsolation: true },
	() => {
		beforeEach( () => {
			wpLogin();
			cy.visit( '/wp-admin/index.php' );
		} );

		// check a pls plugin has correct attributes on button
		// cannot fully test pls install here because the site is not hiive registered
		// and the pls endpoint requires a site and user with solution add-on
		it( 'PLS plugin has proper attributes', () => {
			// load plugin install page
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			cy.get(
				'.nfd-my-solutions-app-container .nfd-plugins-card-list'
			).should( 'exist' );

			// Advanced Reviews is listed
			cy.get( '.plugin-card-advanced-reviews' )
				.contains( 'h2', 'Advanced Reviews' )
				.scrollIntoView()
				.should( 'be.visible' );

			// test entitlement included in solution with PLS attributes
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-activate',
				'true'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Advanced Reviews'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'have.attr',
				'data-nfd-installer-pls-slug',
				'yith-woocommerce-advanced-reviews'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'have.attr',
				'data-nfd-installer-pls-provider',
				'yith'
			);
			cy.get( '.plugin-card-advanced-reviews .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'yith_ywar_panel' ) ).to.be.true;
				} );
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-download-url'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-ctb-id'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'target'
			);

			// not testing pls install
			// not able to achieve licesnse without hiive connection etc
		} );

		// test premium entitlement button in upgrade solution section for solution upgrade cta
		it( 'Advanced Reviews as premium upgrade for creator', () => {
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=creator'
			);

			cy.get(
				'.nfd-my-solutions-app-container .nfd-plugins-card-list'
			).should( 'exist' );

			// Should have upgrade banner with ctb attributes on cta button
			cy.get(
				'.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner'
			).should( 'exist' );

			cy.get(
				'.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner__button'
			).should( 'exist' );

			cy.get(
				'.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner__button'
			)
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect(
						href.includes( '#click-to-buy-WP_SOLUTION_FAMILY' )
					).to.be.true;
				} );
			cy.get(
				'.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner__button'
			).should(
				'have.attr',
				'data-ctb-id',
				'5dc83bdd-9274-4557-a6d7-0b2adbc3919f'
			);
			// dont install or click ctb link
			// tests in ctb module do that already

			// Advanced Reviews is listed
			cy.get( '.plugin-card-advanced-reviews' )
				.contains( 'h2', 'Advanced Reviews' )
				.scrollIntoView()
				.should( 'be.visible' );

			// test entitlement included in solution with PLS attributes
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-activate'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-name'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'have.attr',
				'href',
				'#'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-nfd-installer-download-url'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'data-ctb-id'
			);
			cy.get( '.plugin-card-advanced-reviews .button' ).should(
				'not.have.attr',
				'target'
			);
		} );
	}
);
