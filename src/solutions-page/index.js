import './tailwind.pcss';

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root } from '@newfold/ui-component-library';
import { HashRouter as Router } from 'react-router-dom';
import { SolutionsPage } from './components/solutions-page';

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-solutions-app';

const App = () => {
	return (
		<Root>
			<Router>
				<SolutionsPage />
			</Router>
		</Root>
	);
};

const SolutionsPageRender = () => {
	const DOM_ELEMENT = document.getElementById(
		WP_SOLUTIONS_PAGE_ROOT_ELEMENT
	);
	if ( null !== DOM_ELEMENT ) {
		if ( 'undefined' !== typeof createRoot ) {
			createRoot( DOM_ELEMENT ).render( <App /> );
		}
	}
};

domReady( SolutionsPageRender );
