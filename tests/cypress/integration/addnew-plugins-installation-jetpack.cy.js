// <reference types="Cypress" />
import { wpLogin, wpCli, setSolution } from '../wp-module-support/utils.cy';

describe(
	'My Solutions on Plugin Install Page - Jetpack Plugin',
	{ testIsolation: true },
	() => {
		beforeEach( () => {
			wpLogin();
			cy.visit( '/wp-admin/index.php' );
			wpCli( `plugin uninstall jetpack --deactivate`, false );
		} );

		after( () => {
			// uninstall jetpack plugin
			wpCli( `plugin uninstall jetpack --deactivate`, false );
		} );

		// test free Jetpack plugin install functions
		it( 'Jetpack plugin installs properly', () => {
			setSolution( 'commerce' );
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			cy.get( '.nfd-plugins-card-list' ).should( 'exist' );

			// jetpack is listed
			cy.get( '.plugin-card-jetpack' )
				.contains( 'h2', 'Jetpack' )
				.scrollIntoView()
				.should( 'be.visible' );

			// jetpack button has proper installer attributes
			cy.get( '.plugin-card-jetpack .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.plugin-card-jetpack .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Jetpack'
			);
			cy.get( '.plugin-card-jetpack .button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip'
			);
			cy.get( '.plugin-card-jetpack .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.plugin-card-jetpack .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-jetpack .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);

			// install jetpack
			cy.get( '.plugin-card-jetpack .button' ).click();

			// verify install modal opens
			cy.get( '.nfd-installer-modal__content' ).should( 'be.visible' );
			cy.get( '.nfd-installer-modal__content-subheading' ).contains(
				'Jetpack'
			);
			// verify modal closes
			cy.get( '.nfd-installer-modal__content', {
				timeout: 20000,
			} ).should( 'not.exist' );
			cy.wait( 2000 );

			// verify redirect occurred
			cy.url().should( 'contain', 'jetpack' );

			// go to plugin list page
			cy.visit( '/wp-admin/plugins.php' );

			// verify jetpack is installed
			cy.get( 'tr[data-slug="jetpack"]' )
				.scrollIntoView()
				.should( 'be.visible' );

			// verify jetpack is active
			cy.get( 'a#deactivate-jetpack' )
				.scrollIntoView()
				.should( 'be.visible' );

			// check button attributes for active plugin
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			// jetpack is listed
			cy.get( '.plugin-card-jetpack' )
				.contains( 'h2', 'Jetpack' )
				.scrollIntoView()
				.should( 'be.visible' );

			cy.get( '.plugin-card-jetpack .button' ).should(
				'have.attr',
				'data-is-active'
			);
			cy.get( '.plugin-card-jetpack .button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-url'
			);
			cy.get( '.plugin-card-jetpack .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.plugin-card-jetpack .button' ).click();
			// verify redirect occurred
			cy.url().should( 'contain', 'jetpack' );

			// deactivate plugin
			cy.visit( '/wp-admin/plugins.php' );
			cy.get( 'a#deactivate-jetpack' ).click();

			// attributes match expectations for installed and inactive plugin
			cy.visit(
				'/wp-admin/plugin-install.php?tab=nfd_solutions&solution=commerce'
			);

			cy.get( '.plugin-card-jetpack .button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Jetpack'
			);
			cy.get( '.plugin-card-jetpack .button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip'
			);
			cy.get( '.plugin-card-jetpack .button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.plugin-card-jetpack .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.plugin-card-jetpack .button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
		} );
	}
);
