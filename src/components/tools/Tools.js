import { EmptyTools } from './EmptyTools';
import { Tool } from './tool';
import { useFilter } from './../../contexts/FilterContext';

function layoutTools( tools ) {
	const layout = [];
	let rowSpaces = 3;
	let row = [];

	const pushRow = () => {
		layout.push( ...row );
		row = [];
		rowSpaces = 3;
	};

	while ( tools.length ) {
		if ( tools[ 0 ]?.wide ) {
			if ( rowSpaces > 1 ) {
				row.push( tools.shift() );
				rowSpaces -= 2;
			} else {
				for ( let i = 0; i < tools.length; i++ ) {
					if ( ! tools[ i ]?.wide ) {
						row.push( ...tools.splice( i, 1 ) );
						rowSpaces -= 1;
						break;
					}
				}
				pushRow();
			}
		} else if ( rowSpaces > 0 ) {
			row.push( tools.shift() );
			rowSpaces -= 1;
		}

		if ( ! rowSpaces ) {
			pushRow();
		}
	}
	pushRow();
	return layout;
}

export const Tools = () => {
	const { category, search } = useFilter();
	let tools = NewfoldSolutions.entitlements;

	if ( 'all' !== category ) {
		tools = tools.filter( ( tool ) => tool.category === category );
	}

	if ( search ) {
		tools = tools.filter(
			( tool ) =>
				tool?.name?.toLowerCase().includes( search.toLowerCase() ) ||
				tool?.plsSlug?.toLowerCase().includes( search.toLowerCase() )
		);
	}

	tools = layoutTools( [ ...tools ] );

	return (
		<>
			{ ! tools.length && <EmptyTools /> }
			{ !! tools.length && (
				<div className="nfd-solutions-tools nfd-grid nfd-gap-4">
					{ tools.map( ( tool ) => (
						<Tool
							name={ tool?.name }
							description={ tool.description }
							href={ tool.cta?.url.replace(
								'{siteUrl}',
								NewfoldSolutions.siteUrl
							) }
							icon={ tool?.image?.featureImage }
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
