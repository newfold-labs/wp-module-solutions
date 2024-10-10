import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button, Container } from "@newfold/ui-component-library";
import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classNames from "classnames";
import { Section } from "./Section";



export function EntitlementsCard(props){
    const { entitlementCategories, renderCTAUrl, activeSolution } = props;
    const [ error, setError ] = useState(null);
    const [ apiResponse, setApiResponse ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState( false );
    const [collapse, setCollapse] = useState({});
    let activePluginsArray = [];
    let installedPluginsArray = [];

    const handleDisplay = ( category ) => {   
        setCollapse( (prevState) => ({...prevState, [category.name]: !prevState[category.name]}))    
    }
    
    useEffect( () => {
        apiFetch( { path: "/wp/v2/plugins" } ).then(
            ( result ) => {
                setIsLoaded(true);                
                setApiResponse(result)                                
            },
            ( error ) => {
                setIsLoaded(true);                
                setError(error);
            }
        );
    }, [] );

    if ( error ) {
        console.log(error.message, "error");        
    } 
    else if (!isLoaded){
        return (
            <Container.Header
                    title="Loading..."
            />
          );
    } 
    else if (apiResponse) {        
        apiResponse.map((res) => {
            res['status'] === "active" ? activePluginsArray.push(res['plugin']) : installedPluginsArray.push(res['plugin'])
        })
    
        return(
            <Section.Container>
                <Section.Header
                //TODO: Uncomment line nos. 57 and remove line nos. 56 to make title value dynamically update as per purchased solution
                title={__('My Plugins & Tools', "wp-module-solutions")}
                //title={__(`${activeSolution} Tools`, "wp-module-solutions")}
                anchor={{title : __( "Add a New Plugin", "wp-module-solutions" ), className:"nfd-text-[#196CDF]", href:"/wp-admin/plugin-install.php" }} 
                /> 
                <Section.Content className="nfd-core-tool-mypluginsntools">
                    <>
                        {                    
                            entitlementCategories.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className={classNames('nfd-mt-8', 'nfd-mb-8', 'nfd-flex', 'nfd-flex-row', 'nfd-cursor-pointer',
                                            { 'nfd-border-b nfd-border-[#CBD5E1] nfd-pb-4': !collapse[category.name], })} onClick={() => handleDisplay(category)}>                     
                                            <span className="nfd-text-[#111729] nfd-text-base nfd-font-bold">
                                                {__(category.name, "wp-module-solutions")}
                                            </span>
                                            {
                                                collapse[category.name] ? 
                                                <ChevronDownIcon  className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={() => handleDisplay(category)} />                                            
                                                : 
                                                <ChevronUpIcon className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={() => handleDisplay(category)} />
                                            }
                                        </h2>
                                        {
                                            collapse[category.name] && (
                                                            category.entitlements.map((entitlement) => {
                                                                return(
                                                                    <div className="nfd-flex nfd-flex-row nfd-pb-4 nfd-mb-4 nfd-border-b nfd-border-[#DCE2EA]">                            
                                                                        <img className="entitlement-image" src={entitlement.image.primaryImage} />
                                                                        <div className="nfd-flex nfd-flex-col nfd-ml-4">
                                                                            <h2 className="nfd-text-[#000000] nfd-font-medium">{__(entitlement.name, "wp-module-solutions")}</h2>
                                                                            <p className="nfd-text-[#4A5567] nfd-font-normal nfd-mt-2">{__(entitlement.description, "wp-module-solutions" )}</p>                            
                                                                        </div>                
                                                                        {
                                                                            activePluginsArray.includes(entitlement.basename) ?
                                                                            (
                                                                                <Button
                                                                                as="a"
                                                                                className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]" 
                                                                                href={ renderCTAUrl( entitlement.cta.url ) }
                                                                                variant="secondary"
                                                                                >
                                                                                    { __(`${entitlement.cta.text}`, "wp-module-solutions") }
                                                                                </Button>
                                                                            )
                                                                            :
                                                                            (
                                                                                <Button
                                                                                className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]" 
                                                                                variant="secondary"
                                                                                as="button" 
                                                                                data-nfd-installer-plugin-slug={entitlement.plsSlug} 
                                                                                data-nfd-installer-plugin-provider={entitlement.plsProviderName} 
                                                                                data-nfd-installer-plugin-activate={true}
                                                                                >
                                                                                    { __("Install", "wp-module-solutions")}
                                                                                </Button>
                                                                            )
                                                                        }       
                                                                    </div>
                                                        )
                                                })
                                            )
                                        }    
                                    </div>
                                )
                            })
                        }
                    </>
                </Section.Content>           
            </Section.Container>
        )

    }
}