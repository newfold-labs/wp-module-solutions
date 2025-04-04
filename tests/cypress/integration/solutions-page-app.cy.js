// <reference types="Cypress" />
import { wpLogin } from '../wp-module-support/utils.cy';

describe( 'Solutions App in plugin', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		cy.visit( '/wp-admin/index.php' );
	} );

	// test not connected to hiive will not have a solution
	it( 'Solutions page displays upgrade for those with no solution', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions' );

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
	it( 'Creator solutions page displays tools with proper button atts', () => {
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

		// test premium tool has ctb atts
		// Yoast Premium is listed
		cy.get( '.nfd-solutions-tool-card-yoast-premium' )
			.contains( 'h4', 'Yoast Premium' )
			.scrollIntoView()
			.should( 'be.visible' );

		// test premium tool listed with only ctb attributes
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-activate'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-name'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-slug'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-provider'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yoast' ) ).to.be.true;
			} );
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-download-url'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'data-ctb-id',
			'57d6a568-783c-45e2-a388-847cff155897'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'target',
			'_blank'
		);
	} );

	// test solution=service for entitlements and premium
	it( 'Service solutions page displays tools with proper button atts', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions&solution=service' );

		cy.get( '#nfd-solutions-app' )
			.contains( 'h1', 'Services solution' )
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
		).should( 'have.attr', 'data-nfd-installer-plugin-activate', 'true' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Advanced Reviews'
		);
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'have.attr', 'data-nfd-installer-pls-provider', 'yith' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-pls-slug',
			'yith-woocommerce-advanced-reviews'
		);
		cy.get( '.nfd-solutions-tool-card-advanced-reviews .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yith_ywar_panel' ) ).to.be.true;
			} );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-download-url' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-ctb-id' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'target' );

		// test premium tool has ctb atts
		// Yoast Premium is listed
		cy.get( '.nfd-solutions-tool-card-yoast-premium' )
			.contains( 'h4', 'Yoast Premium' )
			.scrollIntoView()
			.should( 'be.visible' );

		// test premium tool listed with only ctb attributes
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-activate'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-name'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-slug'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-provider'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yoast' ) ).to.be.true;
			} );
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-download-url'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'data-ctb-id',
			'57d6a568-783c-45e2-a388-847cff155897'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'target',
			'_blank'
		);
	} );

	// test solution=commerce for entitlements and premium
	it( 'Commerce solutions page displays tools with proper button atts', () => {
		cy.visit( '/wp-admin/admin.php?page=solutions&solution=commerce' );

		cy.get( '#nfd-solutions-app' )
			.contains( 'h1', 'Commerce solution' )
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
		).should( 'have.attr', 'data-nfd-installer-plugin-activate', 'true' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Advanced Reviews'
		);
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'have.attr', 'data-nfd-installer-pls-provider', 'yith' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-pls-slug',
			'yith-woocommerce-advanced-reviews'
		);
		cy.get( '.nfd-solutions-tool-card-advanced-reviews .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yith_ywar_panel' ) ).to.be.true;
			} );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-download-url' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'data-ctb-id' );
		cy.get(
			'.nfd-solutions-tool-card-advanced-reviews .nfd-button'
		).should( 'not.have.attr', 'target' );

		// Bookings Apointments is listed
		cy.get( '.nfd-solutions-tool-card-bookings-appointments' )
			.contains( 'h4', 'Bookings' )
			.scrollIntoView()
			.should( 'be.visible' );

		// test entitlement included in solution with PLS attributes
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should( 'have.attr', 'data-nfd-installer-plugin-activate', 'true' );
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-plugin-name',
			'Bookings & Appointments'
		);
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should( 'have.attr', 'data-nfd-installer-pls-provider', 'yith' );
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should(
			'have.attr',
			'data-nfd-installer-pls-slug',
			'yith-woocommerce-booking'
		);
		cy.get( '.nfd-solutions-tool-card-bookings-appointments .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yith_booking' ) ).to.be.true;
			} );
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should( 'not.have.attr', 'data-nfd-installer-download-url' );
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should( 'not.have.attr', 'data-ctb-id' );
		cy.get(
			'.nfd-solutions-tool-card-bookings-appointments .nfd-button'
		).should( 'not.have.attr', 'target' );

		// test premium tool has ctb atts
		// Yoast Premium is listed
		cy.get( '.nfd-solutions-tool-card-yoast-premium' )
			.contains( 'h4', 'Yoast Premium' )
			.scrollIntoView()
			.should( 'be.visible' );

		// test premium tool listed with only ctb attributes
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-activate'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-plugin-name'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-slug'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-pls-provider'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' )
			.should( 'have.attr', 'href' )
			.then( ( href ) => {
				expect( href.includes( 'yoast' ) ).to.be.true;
			} );
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'not.have.attr',
			'data-nfd-installer-download-url'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'data-ctb-id',
			'57d6a568-783c-45e2-a388-847cff155897'
		);
		cy.get( '.nfd-solutions-tool-card-yoast-premium .nfd-button' ).should(
			'have.attr',
			'target',
			'_blank'
		);
	} );
} );
