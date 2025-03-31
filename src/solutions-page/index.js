import './tailwind.pcss';

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root, Page } from '@newfold/ui-component-library';
import { Header } from './components/header';
import { FilterProvider } from './contexts/FilterContext';
import { HashRouter as Router } from 'react-router-dom';
import {Content} from './components/content';


const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-solutions-app';

const App = () => {
	return (
		<Root>
			<Router>
				<FilterProvider>
					<Page className="nfd-solutions-app-container nfd-page nfd-py-8 nfd-my-0 nfd-max-w-full">
						<Header />
						<Content />
					</Page>
				</FilterProvider>
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
