const none = require( '../fixtures/none.json' );
const creator = require( '../fixtures/creator.json' );
const service = require( '../fixtures/service.json' );
const commerce = require( '../fixtures/commerce.json' );

/**
 * Loginto WordPress.
 */
export const wpLogin = () => {
	cy.login( Cypress.env( 'wpUsername' ), Cypress.env( 'wpPassword' ) );
};

/**
 * wp-cli helper
 *
 * This wraps the command in the required npx wp-env run cli wp
 *
 * @param {string} cmd               the command to send to wp-cli
 * @param          failOnNonZeroExit
 */
export const wpCli = ( cmd, failOnNonZeroExit = true ) => {
	const args = {
		env: {
			NODE_TLS_REJECT_UNAUTHORIZED: '1',
		},
	};
	if ( ! failOnNonZeroExit ) {
		args.failOnNonZeroExit = false;
	}
	cy.exec( `npx wp-env run cli wp ${ cmd }`, args ).then( ( result ) => {
		for ( const [ key, value ] of Object.entries( result ) ) {
			cy.log( `${ key }: ${ value }` );
		}
	} );
};

/**
 * Set capability helper
 *
 * This calls performs a cli command to set a specific capability
 *
 * @param {*}      capJSON    json of capabilities
 * @param {number} expiration seconds for transient to expire, defualt 3600 (1 hour)
 */
export const setCapability = ( capJSON, expiration = 3600 ) => {
	wpCli(
		`option update _transient_nfd_site_capabilities '${ JSON.stringify(
			capJSON
		) }' --format=json`
	);
	// set transient expiration to one hour (default) from now
	const expiry = Math.floor( new Date().getTime() / 1000.0 ) + expiration;
	// manually set expiration for the transients
	wpCli(
		`option update _transient_timeout_nfd_site_capabilities ${ expiry }`
	);
};

/**
 * Set solutions data
 * @param solution
 * @param expiration
 */
export const setSolution = ( solution, expiration = 3600 ) => {
	if ( solution === 'none' ) {
		wpCli(
			`option update _transient_newfold_solutions '${ JSON.stringify(
				none
			) }' --format=json`
		);
	} else if ( solution === 'creator' ) {
		wpCli(
			`option update _transient_newfold_solutions '${ JSON.stringify(
				creator
			) }' --format=json`
		);
	} else if ( solution === 'service' ) {
		wpCli(
			`option update _transient_newfold_solutions '${ JSON.stringify(
				service
			) }' --format=json`
		);
	} else if ( solution === 'commerce' ) {
		wpCli(
			`option update _transient_newfold_solutions '${ JSON.stringify(
				commerce
			) }' --format=json`
		);
	} else {
		cy.log( 'unknown solution' );
	}
	// set transient expiration to one hour (default) from now
	const expiry = Math.floor( new Date().getTime() / 1000.0 ) + expiration;
	// manually set expiration for the transients
	wpCli( `option update _transient_timeout_newfold_solutions ${ expiry }` );
};
