// <reference types="Cypress" />
import { wpLogin } from '../wp-module-support/utils.cy';

const entitlementsFixture = require( '../fixtures/entitlements.json' );

describe( 'My Plugins and Tools in Plugin App', { testIsolation: true }, () => {
	beforeEach( () => {
		wpLogin();
		
		const ecomCategories = {
			// Example structure for ecom categories
			categories: [
			{ id: 1, name: "Store Operations"},
			{ id: 2, name: "Search Engine Optimization" },
			{ id: 3, name: "Sales & Checkout" },
			{ id: 4, name: "Content Monetization" },
			{ id: 5, name: "Core Tools" },
			{ id: 6, name: "Customer Engagement" },
			{ id: 7, name: "Product Management" }
		  ],
		}
		  // Mocked solution 1 - will only return a subset of categories
		  const serviceCategories = {
			
			categories: [
			  {  id: 2, name: "Search Engine Optimization" },
			  { id: 4, name: "Content Monetization" },
			  { id: 5, name: "Core Tools" },
			  { id: 6, name: "Customer Engagement" },
			],
		  };
		  
		  const contentcreatorCategories = {
			categories: [
				{id: 2, name: "Search Engine Optimization" },
				{ id: 3, name: "Sales & Checkout" },
				{ id: 4, name: "Content Monetization" },
				{ id: 5, name: "Core Tools" },
			],
		  };
		cy.visit( '/wp-admin/index.php' );
	} );

	//Check Categories based on Solution Type (Content Creator, Services, Commerce)
	it('Extracts the solution SKU from API response and check for the solution specific categories', () => {
		
			// set up the intercept for entitlements
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

		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/my_plugins_and_tools');
		cy.wait('@getEntitlements').then((interception) => {
		// Access the response body from the intercepted request
		const solutions = interception.response.body.solutions;
	   // Log the solutions for debugging
		cy.log('Solutions:', JSON.stringify(solutions));
	    const solutionSku = solutions[0]?.sku;
		cy.log('Solution SKU:', solutionSku);
		const solution = solutions.find(s => s.sku === solutionSku);
        const categories = solution?.categories || [];
		if (solutionSku === 'WP_SOLUTION_COMMERCE') {
			cy.log('This site is associated with the "commerce" solution');
			cy.get('.newfold-entitlements-container').should('contain', 'Search Engine Optimization');
            cy.get('.newfold-entitlements-container').should('contain', 'Content Monetization');
            cy.get('.newfold-entitlements-container').should('contain', 'Core Tools');
            cy.get('.newfold-entitlements-container').should('contain', 'Customer Engagement');
			cy.get('.newfold-entitlements-container').should('contain','Sales & Checkout' );
			cy.get('.newfold-entitlements-container').should('contain','Store Operations' );
			cy.get('.newfold-entitlements-container').should('contain','Product Management' );
			
		} else if (solutionSku === 'WP_SOLUTION_SERVICE') {
			cy.log('This site is associated with the "Service" solution');
            cy.get('.newfold-entitlements-container').should('contain', 'Search Engine Optimization');
            cy.get('.newfold-entitlements-container').should('contain', 'Content Monetization');
            cy.get('.newfold-entitlements-container').should('contain', 'Core Tools');
            cy.get('.newfold-entitlements-container').should('contain', 'Customer Engagement');
           
	    } else if (solutionSku === 'WP_SOLUTION_CREATOR') {
			cy.log('This site is associated with the "Content Creator" solution');
			cy.get('.newfold-entitlements-container').should('contain', 'Search Engine Optimization');
            cy.get('.newfold-entitlements-container').should('contain','Sales & Checkout' );
            cy.get('.newfold-entitlements-container').should('contain', 'Core Tools');
            cy.get('.newfold-entitlements-container').should('contain', 'Customer Engagement');
			
		}
		 else {
			cy.log('No solution plan associated with the site');
		}


  // Dynamically check categories based on the solution SKU
  categories.forEach(category => {
      cy.get('.newfold-entitlements-container')
      .contains('h2', category) // Check if the category is visible
      .scrollIntoView()
      .should('be.visible');
	  cy.log('categories');
		  
	  } );
	  cy.get( '.newfold-entitlements-container' )
			.contains( 'h2', 'My Plugins & Tools' )
			.scrollIntoView()
			.should( 'be.visible' );
//category:Core tools
		cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Core Tools' )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
			
			cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'Jetpack' )
			.scrollIntoView()
			.should( 'be.visible' );

			cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h3', 'WonderBlocks' )
			.scrollIntoView()
			.should( 'be.visible' );
//category:Content Monetization
		
        cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Content Monetization' )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
//category:Customer Engagement
		
			cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Customer Engagement' )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
//category:Product Management

	    cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Product Management' )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
//category:Sales & Checkout
        cy.get( '.nfd-core-tool-mypluginsntools' )
			.contains( 'h2', 'Sales & Checkout' )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();

//category:Search Engine Optimization
        cy.get( '.nfd-core-tool-mypluginsntools' )
            .contains( 'h2', 'Search Engine Optimization' )
            .scrollIntoView()
            .should( 'be.visible' )
            .click();

//category:Store Operations
        cy.get( '.nfd-core-tool-mypluginsntools' )
            .contains( 'h2', 'Store Operations' )
            .scrollIntoView()
            .should( 'be.visible' )
            .click();
			

		});
});

//verify Add New Plugin button link
it('Verify the Add New Plugin link near the title', () => {
	cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/my_plugins_and_tools');
	cy.get('a')
	.contains('Add a New Plugin') 
	.should('be.visible')
	.click()
	cy.url().should('eq', 'https://bjo.kax.mybluehost.me/website_489152c4/wp-admin/plugin-install.php')
	
  });
});  

