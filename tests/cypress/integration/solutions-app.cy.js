// <reference types="Cypress" />
import { wpLogin, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements-premium.json' );

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	// test not connected to hiive will not have a solution
	it( 'Solutions page displays upgrade for those with no solution', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions' );

		cy.window().then( ( win ) => {
			cy.log(
				`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
			);
			cy.log( `NewFold solution: ${ win.NewfoldSolutions.solution }` );
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

	// test solution=none for ctb atts
	it( 'Solutions page displays upgrade with CTB atts for those with no solution', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions&solution=none' );

		cy.get( '#nfd-solutions-app' )
			.contains( 'h1', 'Premium tools available in our Solutions' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '.nfd-solutions-upgrade-banner' )
			.contains( 'h2', 'Upgrade' )
			.scrollIntoView()
			.should( 'be.visible' );

		cy.get( '#nfd-solutions-app .nfd-solutions-upgrade-banner__button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( '#click-to-buy-WP_SOLUTION_FAMILY' ) ).to
					.be.true;
			} );
		cy.get(
			'#nfd-solutions-app .nfd-solutions-upgrade-banner__button'
		).should(
			'have.attr',
			'data-ctb-id',
			'5dc83bdd-9274-4557-a6d7-0b2adbc3919f'
		);
		// dont install or click ctb link
		// tests in ctb module do that already
	} );

	// test solution=creator for entitlements and premium
	it( 'Solutions page displays tools with proper button atts for those with creator solution', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions&solution=creator' );

		cy.get( '#nfd-solutions-app' )
			.contains( 'h1', 'Content Creator' )
			.scrollIntoView()
			.should( 'be.visible' );

		// Yoast SEO listed as downloadable plugin
		cy.get( '.nfd-solutions-tool-card-yoast-seo' )
			.contains( 'h4', 'Yoast SEO' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-solutions-tool-card-yoast-seo .nfd-button' ).should(
			'have.attr',
			'data-nfd-installer-download-url',
			'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-seo .nfd-button' ).should(
			'have.attr',
			'data-nfd-installer-plugin-activate',
			'true'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-seo .nfd-button' ).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Yoast SEO'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-seo .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'wpseo_dashboard' ) ).to.be.true;
			} );

		// Advanced Reviews is listed
		cy.get( '.nfd-solutions-tool-card-advanced-reviews' )
			.contains( 'h4', 'Advanced Reviews' )
			.scrollIntoView()
			.should( 'be.visible' );

		// test entitlement included in solution with PLS attributes
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-plugin-activate' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-plugin-name' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-pls-slug' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-pls-provider' );
		cy.get( '.nfd-solutions-tool-card-advanced-reviews .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( '#click-to-buy-WP_SOLUTION_FAMILY' ) ).to
					.be.true;
			} );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-download-url' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should(
			'have.attr',
			'data-ctb-id',
			'5dc83bdd-9274-4557-a6d7-0b2adbc3919f'
		);
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'have.attr', 'target', '_blank' );
	} );

	// test entitlement button case states
	// 1. plugin already installed and active
	// 2. plugin already installed but not active
	// 3. free plugin not installed, needs appropriate installer attributes
	// 4. premium plugin not installed, needs appropriate pls attributes
} );
