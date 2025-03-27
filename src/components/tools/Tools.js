import { EmptyTools } from './EmptyTools';
import { Tool } from './tool';
import { useFilter } from './../../contexts/FilterContext';
import { getTools } from '../../utils';


export const Tools = () => {
	const { category, search } = useFilter();
	let tools = getTools( { category, search } );

	return (
		<>
			{ ! tools.length && <EmptyTools/> }
			{ !! tools.length && (
				<div className="nfd-solutions-tools nfd-grid nfd-gap-4">
					{ tools.map( ( tool ) => (
						<Tool
							name={ tool?.name + ' - ' + tool.category }
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
						/>
					) ) }
				</div>
			) }
		</>
	);
};
