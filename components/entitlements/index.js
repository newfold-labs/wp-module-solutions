import { Container, Title } from '@newfold/ui-component-library';

const defaults = {
	eventEndpoint: '/newfold-data/v1/events/',
	text: {
		title: 'Solutions',
		subTitle: 'Explore the entitlements available with your solution.',
		error: 'Oops, there was an error loading the entitlements, please try again later.',
		noEntitlements: 'Sorry, no current entitlements. Please, try again later.',
		loadMore: 'Load More',
	},
};

/**
 * Entitlements Module
 * For use in brand app to display entitlements
 *
 * @param {*} props
 * @return
 */
const Entitlements = ( { methods, constants, ...props } ) => {
	const [ isLoading, setIsLoading ] = methods.useState( true );
	const [ isError, setIsError ] = methods.useState( false );
	const [ activeSolution, setActiveSolution ] = methods.useState( '' );
	const [ entitlementCategories, setEntitlementsCategories ] =
		methods.useState( [] );
	const [ activeCategoryIndex, setActiveCategoryIndex ] =
		methods.useState( 0 );
	const location = methods.useLocation();

	// set defaults if not provided
	constants = Object.assign( defaults, constants );

	/**
	 * on mount load all entitlement data from module api
	 */
	methods.useEffect( () => {
		methods
			.apiFetch( {
				url: methods.NewfoldRuntime.createApiUrl(
					'/newfold-solutions/v1/entitlements'
				),
			} )
			.then( ( response ) => {
                // check response for data
                const r = JSON.parse(response);
                console.log(r);
				if (
					! r.hasOwnProperty( 'categories' ) ||
					! r.hasOwnProperty( 'entitlements' )
				) {
					setIsError( true );
                    setIsLoading(false);
				} else {
                    setActiveSolution( 
                        validateSolution( r.solution, r.solutions )
                    );
					setEntitlementsCategories(
						validateCategories( r.categories, r.entitlements )
					);
                    setIsLoading(false);
				}
			} );
	}, [] );

	/**
	 * When entitlementItems changes
	 * verify that there are entitlements
	 */
	methods.useEffect( () => {
		// only after a response
		if ( ! isLoading ) {
			// if no entitlement items, display error
			if ( entitlementCategories.length < 1 ) {
				setIsError( true );
			} else {
				setIsError( false );
			}
		}
	}, [ entitlementCategories ] );

	/**
	 * Filter entitlements based on category
	 * @param cat category.name
     * @param entitlements the entitlements to assign to the category
	 */
	const filterCategoryEntitlements = ( cat, entitlements ) => {
		return entitlements.filter( ( entitlement ) => {
			return entitlement.category === cat;
		} );
	};

    const validateSolution = (solution, solutions) => {
        const activeSolution = solutions.filter( (s) => {
            return solution == s.sku;
        });
        return activeSolution[0];
    };

	/**
	 * Validate provided category data
	 * @param Array      categories
	 * @param categories
	 * @return
	 */
	const validateCategories = ( categories, entitlements ) => {
		if ( ! categories.length ) {
			return [];
		}

		let thecategories = [];

        // assign entitlements
		categories.forEach( ( cat ) => {
            // add class name to category
			cat.className = 'newfold-entitlement-category-' + cat.name.toLowerCase().replace(' & ','_').replace('/','_').replace(' ','_');
            // get entitlements for this category
            cat.entitlements = filterCategoryEntitlements( cat.name, entitlements );
            thecategories.push( cat );
		} );
        
        // sort by priority
		return thecategories.sort( ( a, b ) => {
            return a.priority - b.priority;
        } );
	};

    const renderCategory = (category) => {
        console.log( category.name, category.priority);
        return (
            <div
                className={category.className}
                key={category.className}
            >
                <Title as="h2" size="2">
                    { category.name }
                </Title>
                { category.entitlements.length > 0 && renderEntitlementList( category.entitlements ) }
            </div>
        );
    };

    const renderEntitlementList = ( entitlements ) => {
        return entitlements.map( (entitlement) => (
            <div
                className={`entitlement-${entitlement.slug} entitlement-${entitlement.type}`}
                key={entitlement.basename}
            >
                <Title as="h3" size="3">
                    { entitlement.name }
                </Title>
                <p>{entitlement.description}</p>
            </div>
        ) );
    };

	return (
        <>
            { isLoading && (
                <Container.Header
                    title="Loading..."
                />
            ) }
            { !isLoading && isError && (
                <Container.Header
                    title="Error"
                    description={ constants.text.error }
                />
            ) }
            { !isLoading && !isError &&
            <>
                <Container.Header
                    title={ constants.text.title +': '+ activeSolution.name }
                    description={ constants.text.subTitle }
                />
                <Container.Block
                    className={ methods.classNames(
                        'newfold-entitlements-wrapper',
                    ) }
                >
                    { ! isLoading && ! isError && (
                        entitlementCategories.map( ( category ) => (
                            renderCategory(category)
                        ) )
                    ) }
                </Container.Block>
                </>
            }
		</>
	);
};

export default Entitlements;
