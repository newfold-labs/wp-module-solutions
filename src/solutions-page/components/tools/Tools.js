import { EmptyTools } from './EmptyTools';
import { Tool } from './tool';
import { UpgradeCard } from './upgrade-card';
import { useFilter } from '../../contexts/FilterContext';
import { getTools } from 'common/utils';
import { useRef, useEffect, useState } from '@wordpress/element';

export const Tools = () => {
	const grid = useRef();
	const { category, search } = useFilter();
	const [ tools, setTools ] = useState( getTools( { category, search } ) );
	const hasUpgradeCard = 'WP_SOLUTION_CREATOR' === NewfoldSolutions.solution;

	const calculateTools = () => {
		if ( grid?.current ) {
			const columns = window
				.getComputedStyle( grid.current )
				[ 'grid-template-columns' ].split( ' ' ).length;
			setTools( getTools( { category, search, columns, hasUpgradeCard } ) );
		}
	};

	useEffect( () => {
		window.addEventListener( 'resize', calculateTools );

		return () => {
			window.removeEventListener( 'resize', calculateTools );
		};
	}, [ tools ] );

	useEffect( () => {
		calculateTools();
	}, [ category, search ] );

	return (
		<>
			{ ! tools.length && !! search && <EmptyTools/> }
			<div
				className="nfd-solutions-tools nfd-grid nfd-gap-4 nfd-grid-cols-1 min-[520px]:nfd-grid-cols-2 min-[1200px]:nfd-grid-cols-3 min-[1520px]:nfd-grid-cols-4"
				ref={ grid }
			>
				{ tools.map( ( tool ) => {
						return <>
							{
								tool?.id === 'upgrade-card' ?
									<UpgradeCard/>
									:
									<Tool
										name={ tool?.name }
										category={ tool.category }
										description={ tool.description }
										ctaUrl={ tool.cta?.url }
										ctaLabel={ tool.cta?.text }
										featureIcon={ tool?.image?.featureImage }
										smallIcon={ tool?.image?.primaryImage }
										wide={ tool?.wide }
										premium={ tool?.premium }
										popular={ tool?.popular }
										key={ tool?.name }
										isActive={ tool?.isActive }
										plsProvider={ tool?.plsProviderName }
										basename={ tool?.basename }
										plsSlug={ tool?.plsSlug }
										ctbId={ tool?.ctbId }
										ctbHref={ tool?.ctbHref }
										download={ tool?.download }
									/>
							}
						</>;
					}
				) }
			</div>
		</>
	);
};
