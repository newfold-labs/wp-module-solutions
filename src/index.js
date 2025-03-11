import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root } from '@newfold/ui-component-library';
import {Header} from './components/header';

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-solutions-app';

const App = () => {
	return (
		<Root>
			<Header/>
		</Root>
	);
}

const SolutionsPageRender = () => {
	const DOM_ELEMENT = document.getElementById( WP_SOLUTIONS_PAGE_ROOT_ELEMENT );
	if ( null !== DOM_ELEMENT ) {
		if ( 'undefined' !== typeof createRoot ) {
			createRoot( DOM_ELEMENT ).render( <App/> );
		}
	}
};

domReady( SolutionsPageRender );
