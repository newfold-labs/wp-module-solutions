import './components/utils/plugins.css';

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root, Page } from '@newfold/ui-component-library';
import { E2E_TEST_IDS } from 'common/constants/e2eTestIds';
import { Plugins } from './components/plugins';
import { getPlan } from './components/utils';

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-add-new-app';

const App = () => {
	const plan = getPlan();
	return (
		<>
			<Root>
				<Page
					className="nfd-my-solutions-app-container"
					data-testid={ E2E_TEST_IDS.mySolutionsContainer }
				>
					<Plugins plan={ plan } />
				</Page>
			</Root>
		</>
	);
};

const SolutionsPageRender = () => {
	const DOM_ELEMENT = document.getElementById(
		WP_SOLUTIONS_PAGE_ROOT_ELEMENT
	);
	if ( null !== DOM_ELEMENT ) {
		DOM_ELEMENT.setAttribute( 'data-testid', E2E_TEST_IDS.addNewApp );
		if ( 'undefined' !== typeof createRoot ) {
			createRoot( DOM_ELEMENT ).render( <App /> );
		}
	}
};

domReady( SolutionsPageRender );
