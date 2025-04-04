import { Creator } from './plans/Creator';
import { Service } from './plans/Service';
import { Commerce } from './plans/Commerce';
import { NoSolution } from './plans/NoSolution';
import { useState, useEffect } from 'react';

export const Plugins = ( { plan } ) => {

    const [hideSolution, setHideSolution] = useState(false);
    const [prevRenderSolution, setPrevRenderSolution] = useState(false);
    const searchPluginsSection = document.querySelector('.ndf-plugin-filter-section');

    useEffect(() => {
        const input = document.querySelector('#search-plugins');
        if (!input) return;

        const handler = () => {
            setHideSolution(input.value.trim().length > 0);
            setPrevRenderSolution(true);
        };

        input.addEventListener('input', handler);

        setHideSolution(input.value.trim().length > 0);

        return () => {
            input.removeEventListener('input', handler);
        };
    }, []);

    if ( hideSolution || prevRenderSolution ) {
        searchPluginsSection.style.display = "block";
        return;
    } else {
        searchPluginsSection.style.display="none";
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
