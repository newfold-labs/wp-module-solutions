// login
export const wpLogin = () => {
	cy.login( Cypress.env( 'wpUsername' ), Cypress.env( 'wpPassword' ) );
};

// wp cli wrapper
export const wpCli = ( cmd ) => {
	cy.exec( `npx wp-env run cli wp ${ cmd }`, {
		env: {
			NODE_TLS_REJECT_UNAUTHORIZED: '1',
		},
	} ).then( ( result ) => {
		for ( const [ key, value ] of Object.entries( result ) ) {
			cy.log( `${ key }: ${ value }` );
		}
	} );
};
