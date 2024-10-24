import { EntitlementsCard } from './EntitlementsCard';
import './styles.scss';
import { Container, Title, Button } from '@newfold/ui-component-library';

const defaults = {
	eventEndpoint: '/newfold-data/v1/events/',
	text: {
		title: 'Solutions',
		subTitle: 'Explore the plugins & tools available with your solution.',
		error: 'Oops, there was an error loading the plugins & tools, please try again later.',
		noEntitlements: 'Sorry, no current plugins & tools. Please, try again later.',
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
                let r = response;
                // if response is not already json parse it (debug mode)
                if ( typeof r === 'string' ) {
                    console.log( 'Sample entitlements loaded.')
                    r = JSON.parse( response );
                }
                // console.log(r);
                // check response for proper data
				if (
					r.hasOwnProperty( 'solution' ) &&
					r.hasOwnProperty( 'solutions' ) &&
					r.hasOwnProperty( 'entitlements' ) &&
					r.hasOwnProperty( 'categories' )
				) {
                    setActiveSolution( 
                        validateSolution( r.solution, r.solutions )
                    );
					setEntitlementsCategories(
						validateCategories( r.categories, r.entitlements )
					);
                    setIsLoading( false );
				} else {
                    console.log( 'Invalid or malformed entitlements response.' );
					setIsError( true );
                    setIsLoading( false );
				}
			} ).catch( ( response ) => {
                // if a site is not connected to hiive it cannot load entitlements
                console.log( response.message );
                setIsLoading( false );
                setIsError( true );
            });
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

    const validateSolution = ( solution, solutions ) => {
        const activeSolution = solutions.filter( ( thesolution ) => {
            return solution == thesolution.sku;
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

		//sort entitlements in alphabetical order
		const sortedPluginNames = entitlements.sort((a, b) => a.name.localeCompare(b.name))

		let thecategories = [];

        // assign entitlements
		categories.forEach( ( cat ) => {
            // add class name to category
			cat.className = 'newfold-entitlement-category-' + cat.name.toLowerCase().replace(' & ','_').replace('/','_').replace(' ','_');
            // get entitlements for this category
            cat.entitlements = filterCategoryEntitlements( cat.name, sortedPluginNames );
            thecategories.push( cat );
		} );
        // sort by priority
		return thecategories.sort( ( a, b ) => {
            return a.priority - b.priority;
        } );
	};
    
    const renderCTAUrl = ( url ) => {
        if ( ! window.NewfoldRuntime || ! window.NewfoldRuntime.siteUrl ) {
			return url.replace( '{siteUrl}', '' ); // fallback to site relative url if no siteUrl is found
		}
		return url.replace( '{siteUrl}', window.NewfoldRuntime.siteUrl );
    };

	const filterDataWithEntitlements = ( entitlementCategories ) => {
		return entitlementCategories.filter( val => val.entitlements?.length > 0 );
	}

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
            { !isLoading && !isError && (<EntitlementsCard entitlementCategories={filterDataWithEntitlements(entitlementCategories)} renderCTAUrl={renderCTAUrl} activeSolution={activeSolution['name']} />) }
		</>
	);
};

export default Entitlements;
