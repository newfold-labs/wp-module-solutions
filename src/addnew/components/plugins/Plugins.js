import { Creator } from './plans/Creator';
import { Service } from './plans/Service';
import { Commerce } from './plans/Commerce';
import { NoSolution } from './plans/NoSolution';

export const Plugins = ( { plan } ) => {
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
