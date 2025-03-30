const getPlugins = ( {
                       includePremium = true,
                   } ) => {
    let tools = NewfoldSolutions.entitlements;

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

export { getPlugins };
