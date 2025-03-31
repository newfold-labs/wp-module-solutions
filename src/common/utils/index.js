const popularTools = [
	'ad68e506-8c2b-4c0f-a9e3-16623d00041e', // Booking & Appointments
	'20085485-7185-40fd-89e4-14dbb690aea2', // Advanced Review
	'd561ecd7-678b-4a19-ad34-385894bea07a', // Wishlist
];

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

function sortTools( ent1, ent2 ) {
	if ( ent1?.image?.featureImage && ! ent2?.image?.featureImage ) {
		return -1;
	}
	if ( ! ent1?.image?.featureImage && ent2?.image?.featureImage ) {
		return 1;
	}

	const categoriesPriority = Object.fromEntries(
		NewfoldSolutions.categories.map( ( cat ) => [ cat.slug, cat.priority ] )
	);

	if (
		categoriesPriority[ ent1.categorySlug ] >
		categoriesPriority[ ent2.categorySlug ]
	) {
		return -1;
	}
	if (
		categoriesPriority[ ent1.categorySlug ] >
		categoriesPriority[ ent2.categorySlug ]
	) {
		return 1;
	}

	return 0;
}

const getTools = ( {
					   includePremium = true,
					   sortForLayout = true,
					   sortByPriority = true,
					   search = null,
					   category = 'all',
				   } ) => {
	let tools = NewfoldSolutions.entitlements;

	if ( includePremium ) {
		tools = [
			...tools,
			...NewfoldSolutions.premium.map( ( tool ) => {
				tool.premium = true;

				return tool;
			} ),
		].map( tool => {
			if ( popularTools.includes( tool.id ) ) {
				tool.popular = true;
			}

			return tool;
		} );
	}

	if ( sortByPriority ) {
		tools.sort( sortTools );
	}

	if ( 'all' !== category ) {
		tools = tools.filter( ( tool ) => {
			if ( 'premium' === category ) {
				return tool.premium;
			}
			if ( 'popular' === category ) {
				return tool.popular;
			}

			return tool?.categorySlug === category
		} );
	}

	if ( search ) {
		tools = tools.filter(
			( tool ) =>
				tool?.name?.toLowerCase().includes( search.toLowerCase() ) ||
				tool?.plsSlug?.toLowerCase().includes( search.toLowerCase() )
		);
	}

	if ( sortForLayout ) {
		tools = layoutTools( [ ...tools ] );
	}
	return tools;
};

const getActiveSolution = () => {
	return NewfoldSolutions?.solutions.find( solution => solution?.sku === NewfoldSolutions?.solution );
};

export {
	getTools,
	getActiveSolution
};
