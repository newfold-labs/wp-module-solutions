import { EmptyTools } from './EmptyTools';
import { Tool } from './tool';
import { useFilter } from '../../contexts/FilterContext';
import { getTools } from 'common/utils';

const wideCards = [
	'20085485-7185-40fd-89e4-14dbb690aea2', // Advanced Review
	'ad68e506-8c2b-4c0f-a9e3-16623d00041e', // Booking & Appointments
];

export const Tools = () => {
	const { category, search } = useFilter();
	let tools = getTools( { category, search } );

	tools.map( tool => {
		if ( wideCards.includes( tool.id ) ) {
			tool.wide = true;
		}

		return tool;
	} )

	return (
		<>
			{ ! tools.length && <EmptyTools/> }
			{ !! tools.length && (
				<div className="nfd-solutions-tools nfd-grid nfd-gap-4 nfd-grid-cols-2 min-[1200px]:nfd-grid-cols-3">
					{ tools.map( ( tool ) => (
						<Tool
							name={ tool?.name }
							category={ tool.category }
							description={ tool.description }
							href={ tool.cta?.url.replace(
								'{siteUrl}',
								NewfoldSolutions.siteUrl
							) }
							featureIcon={ tool?.image?.featureImage }
							smallIcon={ tool?.image?.primaryImage }
							wide={ tool?.wide }
							premium={ tool?.premium }
							popular={ tool?.popular }
							key={ tool?.name }
							isActive={ tool?.isActive }
							plsProvider={ tool?.plsProviderName }
							plsSlug={ tool?.plsSlug }
							ctbId={ tool?.ctbId }
							ctbHref={ tool?.ctbHref }
						/>
					) ) }
				</div>
			) }
		</>
	);
};
