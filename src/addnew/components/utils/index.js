function sortPlugins( plugins ) {
	const plans = {
		WP_SOLUTION_COMMERCE: [
			{
				id: 'bb65fce0-24b6-4714-8d5d-3a693f428df4',
				position: 2,
			},
		],
	};

	const plan = getPlan().sku;

	if ( plans[ plan ] ) {
		const pluginsOrder = plans[ plan ];
		pluginsOrder.forEach( ( plugin ) => {
			const index = plugins.findIndex(
				( item ) => item.id === plugin.id
			);
			if ( index !== -1 ) {
				const [ element ] = plugins.splice( index, 1 );
				plugins.splice( plugin.position, 0, element );
			}
		} );
	}

	return plugins;
}

const getPlugins = ( {
	includePremium = true,
	includeEntitlements = true,
	sortByPlan = false,
} ) => {
	let plugins = includeEntitlements ? NewfoldSolutions.entitlements : [];

	if ( includePremium ) {
		plugins = [
			...plugins,
			...NewfoldSolutions.premium.map( ( plugin ) => {
				plugin.premium = true;

				return plugin;
			} ),
		];
	}

	if ( sortByPlan ) {
		plugins = sortPlugins( plugins );
	}

	return plugins;
};

const getPlan = () => {
	const plan = {
		name: 'Solutions',
		sku: '',
	};
	const planType = NewfoldSolutions?.solution;
	const currentSolution = NewfoldSolutions?.solutions.find(
		( solution ) => solution?.sku === planType
	);

	if ( currentSolution ) {
		plan.sku = currentSolution.sku;
		plan.name = currentSolution.name;
	}

	return plan;
};
export { getPlugins, getPlan };
