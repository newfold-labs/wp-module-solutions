const getPlugins = ( {
                       includePremium = true,
                        includeEntitlements = true,
                   } ) => {
    let tools = ( includeEntitlements ) ? NewfoldSolutions.entitlements : [];

    if ( includePremium ) {
        tools = [
            ...tools,
            ...NewfoldSolutions.premium.map( ( tool ) => {
                tool.premium = true;

                return tool;
            } ),
        ];
    }
    return tools;
};

const getPlan = () => {

    let plan = {
        'name' : 'Solutions',
        'sku' : ''
    }
    let planType = NewfoldSolutions?.solution;
    planType = '';
    const currentSolution = NewfoldSolutions?.solutions.find( solution => solution?.sku === planType );

    if ( currentSolution ) {
        plan.sku = currentSolution.sku;
        plan.name = currentSolution.name;
    }



    return plan;
};
export { getPlugins, getPlan };