import './components/utils/plugins.css'

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root, Page } from '@newfold/ui-component-library';
import { Plugins } from "./components/plugins";
import {getPlan} from "./components/utils";

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-add-new-app';

const App = () => {
    let plan = getPlan();
	return (
		<>
            <Page className="nfd-solutions-app-container">
                <Plugins plan={plan} />
            </Page>
        </>
    );
};

const SolutionsPageRender = () => {
    const DOM_ELEMENT = document.getElementById(
        WP_SOLUTIONS_PAGE_ROOT_ELEMENT
    );
    if (null !== DOM_ELEMENT) {
        if ('undefined' !== typeof createRoot) {
            let icon = `<svg id="ndf-tools-plugin-bluehost-brand" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16 4.46067V0H11.5302V4.46067H16ZM16 5.76933V10.2307H11.5302V5.76933H16ZM4.46778 16V11.5387H0V16H4.46778ZM10.2339 11.5387V16H5.76409V11.5387H10.2339ZM16 11.5387V16H11.5302V11.5387H16ZM10.2339 10.2307V5.76933H5.76409V10.2307H10.2339ZM4.46778 5.76933V10.2307H0V5.76933H4.46778ZM10.2305 0V4.46067H5.76409V0H10.2305ZM4.46778 4.46067V0H0V4.46067H4.46778Z"
                      fill="#196BDE"/>
            </svg>`
            const filterPremiumLink = document.querySelector('.plugin-install-nfd_solutions > a');
            if (filterPremiumLink) {
                filterPremiumLink.innerHTML = icon + filterPremiumLink.innerHTML;
            }
            createRoot(DOM_ELEMENT).render(<App/>);
        }
    }
};

domReady(SolutionsPageRender);
