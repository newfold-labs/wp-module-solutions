import './tailwind.pcss';

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root, Page } from '@newfold/ui-component-library';
import { Header } from './components/header';
import { FavouritesProvider } from './contexts/FavouritesContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { Sidebar } from './components/sidebar';
import { Tools } from './components/tools';
import { useLocation, HashRouter as Router } from 'react-router-dom';

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-solutions-app';

const App = () => {
	return (
		<Root>
			<Router>
				<CategoryProvider>
					<FavouritesProvider>
						<Page className="nfd-solutions-app-container nfd-page min-[783px]:nfd-p-8 min-[783px]:nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0">
							<Header/>
							<div className="nfd-flex nfd-gap-6 nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0">
								<Sidebar/>
								<main className="nfd-w-full">
									<Tools/>
								</main>
							</div>
						</Page>
					</FavouritesProvider>
				</CategoryProvider>
			</Router>
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
