// <reference types="Cypress" />
import { wpLogin, wpCli, setCapability } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements.json' );

// test each entitlement button case state
// 1. plugin already installed and active
// 2. plugin already installed but not active
// 3. free plugin not installed, needs appropriate installer attributes
// 4. premium plugin not installed, needs appropriate pls attributes

describe(
	'My Plugins and Tools in Plugin App - Jetpack',
	{ testIsolation: true },
	() => {
		beforeEach( () => {
			wpLogin();
			cy.visit( '/wp-admin/index.php' );
			wpCli( `plugin uninstall jetpack --deactivate`, false );
		} );

		after( () => {
			wpCli( `transient delete nfd_site_capabilities` );
			// uninstall jetpack plugin
			wpCli( `plugin uninstall jetpack --deactivate`, false );
		} );

		// test free Jetpack plugin install functions
		it( 'Jetpack plugin installs properly', () => {
			// Set hasSolution:true in capabilities
			setCapability( { hasSolution: true } );

			// entitlements intercept
			cy.intercept(
				{
					method: 'GET',
					url: /newfold-solutions(\/|%2F)v1(\/|%2F)entitlements/,
				},
				{
					body: entitlementsFixture,
					delay: 100,
				}
			).as( 'getEntitlements' );

			// load plugin install page
			cy.visit( '/wp-admin/plugin-install.php' );

			cy.window().then( ( win ) => {
				cy.log(
					`NewfoldRuntime.capabilities.hasSolution: ${ win.NewfoldRuntime.capabilities.hasSolution }`
				);
			} );

			// check that my plugins and tools tab displays when capabilities.hasSolution is true
			cy.get(
				'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
			)
				.should( 'be.visible' )
				.click();

			cy.wait( '@getEntitlements' );

			cy.get( '.plugin-install-nfd_my_plugins_and_tools' ).should(
				'be.visible'
			);

			cy.get( '.nfd-solutions-availble-list' ).should( 'exist' );

			// jetpack is listed
			cy.get( '.nfd-solutions-availble-list' )
				.contains( 'h3', 'Jetpack' )
				.scrollIntoView()
				.should( 'be.visible' );

			// jetpack button has proper installer attributes
			/*
		<button
			title="Install Plugin"
			class="nfd-solutions-availble-list-item-button"
			data-nfd-installer-pls-provider="null"
			data-nfd-installer-plugin-activate="true"
			data-nfd-installer-plugin-name="Jetpack"
			data-nfd-installer-download-url="https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip"
			data-nfd-installer-plugin-url="/wp-admin/admin.php?page=my-jetpack"
		>
			Manage
		</button> 
		 */
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'title',
				'Install Plugin'
			);
			cy.get( '.nfd-solutions-jetpack-button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Jetpack'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip'
			);
			cy.get( '.nfd-solutions-jetpack-button' )
				.should( 'have.attr', 'data-nfd-installer-plugin-url' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);

			// install jetpack
			cy.get( '.nfd-solutions-jetpack-button' ).click();

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
			cy.get(
				'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
			)
				.should( 'be.visible' )
				.click();
			// jetpack is listed
			cy.get( '.nfd-solutions-availble-list' )
				.contains( 'h3', 'Jetpack' )
				.scrollIntoView()
				.should( 'be.visible' );
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-name'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-plugin-url'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'title',
				'Manage Plugin'
			);
			cy.get( '.nfd-solutions-jetpack-button' )
				.should( 'have.attr', 'href' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			// deactivate plugin
			cy.visit( '/wp-admin/plugins.php' );
			cy.get( 'a#deactivate-jetpack' ).click();
			// attributes match expectations for installed and inactive plugin
			cy.get(
				'#adminmenu a[href="plugin-install.php?tab=nfd_my_plugins_and_tools"]'
			)
				.should( 'be.visible' )
				.click();

			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'title',
				'Activate Plugin'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'data-nfd-installer-plugin-name',
				'Jetpack'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'have.attr',
				'data-nfd-installer-download-url',
				'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip'
			);
			cy.get( '.nfd-solutions-jetpack-button' )
				.should( 'have.attr', 'data-nfd-installer-plugin-url' )
				.then( ( href ) => {
					expect( href.includes( 'my-jetpack' ) ).to.be.true;
				} );
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-slug'
			);
			cy.get( '.nfd-solutions-jetpack-button' ).should(
				'not.have.attr',
				'data-nfd-installer-pls-provider'
			);
		} );
	}
);
