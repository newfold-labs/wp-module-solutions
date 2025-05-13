import { Creator } from './plans/Creator';
import { Service } from './plans/Service';
import { Commerce } from './plans/Commerce';
import { NoSolution } from './plans/NoSolution';
import { useState, useEffect } from 'react';

export const Plugins = ( { plan } ) => {

     const [hideSolution, setHideSolution] = useState(false);
     const pluginSection = document.querySelector('.nfd-my-solutions-app-container');
     const brandTab = document.querySelector('.plugin-install-nfd_solutions a');

    useEffect(() => {
        const input = document.querySelector('#search-plugins');
        if (!input) return;
        const handler = () => {
            setHideSolution(input.value.trim().length > 1);
        };

        input.addEventListener('input', handler);

        return () => {
            input.removeEventListener('input', handler);
        };
    }, []);

    //Logic to manage to hide/show the solution section
    if ( pluginSection ) {
        if ( hideSolution ) {
            pluginSection.style.display = "none";
            // Remove the label so that the form doesn't drop below the tabs on small screens.
            document.querySelector('.search-plugins label').style.display="none";
        } else {
            pluginSection.style.display = (brandTab && brandTab.classList.contains('current'))
                ? "block"
                : "none";
        }
    }

    return (
		<>
			{ !! plan && 'WP_SOLUTION_CREATOR' === plan.sku && (
				<Creator plan={ plan } />
			) }
			{ !! plan && 'WP_SOLUTION_SERVICE' === plan.sku && (
				<Service plan={ plan } />
			) }
			{ !! plan && 'WP_SOLUTION_COMMERCE' === plan.sku && (
				<Commerce plan={ plan } />
			) }
			{ ! plan ||
				( !! plan && '' === plan.sku && <NoSolution plan={ plan } /> ) }
		</>
	);
};
