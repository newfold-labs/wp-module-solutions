import '../tailwind.pcss';

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { Root, Page } from '@newfold/ui-component-library';
import { Section } from './components/section';
import { FilterProvider } from '../contexts/FilterContext';
import { Tools } from '../components/tools';
import { HashRouter as Router } from 'react-router-dom';
import {__} from "@wordpress/i18n";

const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-add-new-app';

const App = () => {
	return (
		<Root>
			<Router>
				<FilterProvider>
					<Page className="nfd-solutions-app-container nfd-page min-[783px]:nfd-p-8 min-[783px]:nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0">
                        <Section brandLogo={false} title={__(
                            'Premium tools available in your Commerce solution',
                            'wp-module-solutions'
                        )}>
                            <p>
                                {__(
                                    'Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.',
                                    'wp-module-solutions'
                                )}
                            </p>
                        </Section>

                        <div
                            className="nfd-flex nfd-gap-6 nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0">
                            <main className="nfd-w-full">
                                <Tools/>
                            </main>
                        </div>
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
    if (null !== DOM_ELEMENT) {
        if ('undefined' !== typeof createRoot) {
            createRoot(DOM_ELEMENT).render(<App/>);
        }
    }
};

domReady(SolutionsPageRender);
