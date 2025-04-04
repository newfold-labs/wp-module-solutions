// <reference types="Cypress" />
import { wpLogin, wpCli } from '../wp-module-support/utils.cy';

describe(
	'My Solutions on Plugin Install Page - Yoast Check',
	{ testIsolation: true },
	() => {
		beforeEach( () => {
			wpLogin();
			cy.visit( '/wp-admin/index.php' );
			wpCli( `plugin uninstall wordpress-seo --deactivate`, false );
		} );

		after( () => {
			// uninstall yoast plugins
			wpCli( `plugin uninstall wordpress-seo --deactivate`, false );
		} );

		// test free Yoast SEO plugin install functions
		it( 'Yoast SEO plugin installs properly', () => {
			// verify yoast is not installed
			cy.visit( '/wp-admin/plugins.php' );

			cy.get( '#the-list' ).within( () => {
				cy.get( 'tr[data-slug="wordpress-seo"]' ).should( 'not.exist' );
			} );

			// load plugin install page
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=creator'
			);

			cy.get(
				'.nfd-my-solutions-app-container .nfd-plugins-card-list'
			).should( 'exist' );

			// yoast is listed
			cy.get( '.nfd-plugins-card-list' )
				.contains( 'h2', 'Yoast SEO' )
				.scrollIntoView()
				.should( 'be.visible' );

			// test free entitlement with download attributes
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Yoast SEO'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-is-active'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-ctb-id'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'target'
			);
			cy.get( '.plugin-card-yoast-seo .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'wpseo_dashboard' ) ).to.be.true;
				} );

			// install yoast
			cy.get( '.plugin-card-yoast-seo .button' ).click();

			// verify install modal opens
			cy.get( '.nfd-installer-modal__content' ).should( 'be.visible' );
			cy.get( '.nfd-installer-modal__content-subheading' ).contains(
				'Yoast'
			);
			// verify modal closes
			cy.get( '.nfd-installer-modal__content', {
				timeout: 20000,
			} ).should( 'not.exist' );
			cy.wait( 2000 );

			// verify redirect occurred
			cy.url().should( 'contain', 'wpseo_dashboard' );

			// reload plugin list
			cy.visit( '/wp-admin/plugins.php' );

			// verify wordpress-seo is installed
			cy.get( 'tr[data-slug="wordpress-seo"]' )
				.scrollIntoView()
				.should( 'be.visible' );

			// verify wordpress-seo is active
			cy.get( 'a#deactivate-wordpress-seo' )
				.scrollIntoView()
				.should( 'be.visible' );

			// return to entitlements list to verify installed attributes are in place
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=creator'
			);

			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'have.attr',
				'data-is-active',
				'true'
			);
			cy.get( '.plugin-card-yoast-seo .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'wpseo_dashboard' ) ).to.be.true;
				} );
		} );

		// test premium Yoast premium plugin ctb attributes
		it( 'Yoast Premium plugin has CTB attributes', () => {
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			cy.get(
				'.nfd-my-solutions-app-container .nfd-plugins-card-list'
			).should( 'exist' );

			// yoast premium is listed
			cy.get( '.nfd-plugins-card-list' )
				.contains( 'h2', 'Yoast Premium' )
				.scrollIntoView()
				.should( 'be.visible' );

			// ctb premium has ctb attributes
			// test standalone premium tool: Yoast Premium
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-name'
			);
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'not.have.attr',
				'data-nfd-installer-download-url'
			);
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'have.attr',
				'data-ctb-id',
				'57d6a568-783c-45e2-a388-847cff155897'
			);
			cy.get( '.plugin-card-yoast-premium .button' ).should(
				'have.attr',
				'target',
				'_blank'
			);
			// ctb fallback href
			cy.get( '.plugin-card-yoast-premium .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'yoast.com' ) ).to.be.true;
				} );

			// dont install or click ctb link
			// tests in ctb module do that already
		} );

		it( 'Yoast SEO available for creator', () => {
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=creator'
			);

			cy.get(
				'.nfd-my-solutions-app-container .nfd-plugins-card-list'
			).should( 'exist' );

			// Yoast SEO listed as downloadable plugin
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Yoast SEO'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-is-active'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'data-ctb-id'
			);
			cy.get( '.plugin-card-yoast-seo .button' ).should(
				'not.have.attr',
				'target'
			);
			cy.get( '.plugin-card-yoast-seo .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'wpseo_dashboard' ) ).to.be.true;
				} );
		} );
	}
);
