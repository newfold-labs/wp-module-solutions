import { Button } from "@newfold/ui-component-library";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Section } from "./Section";


export function EntitlementsCard(props){

    const { entitlementCategories, renderCTAUrl } = props;
    const [collapse, setCollapse] = useState(false)
    const handleDisplay = () => {
        setCollapse(!collapse)
    }

    console.log(collapse, "collapse");
    
    return(
        <Section.Container>
            <Section.Header
            title={__("My Plugins & Tools", "wp-module-solutions")}
            anchor={{title : __( "Add a New Plugin", "wp-module-solutions" ), className:"nfd-text-[#196CDF]" }} 
            /> 
            <Section.Content className="nfd-core-tool-mypluginsntools">
                <>
                    {                    
                        entitlementCategories.map((category) => {
                            return (
                                <>
                                    <h2 className={classNames('nfd-mt-8', 'nfd-mb-8', 'nfd-flex', 'nfd-flex-row', 'nfd-cursor-pointer',
                                        { 'nfd-border-b nfd-border-[#CBD5E1] nfd-pb-4': !collapse, })} onClick={handleDisplay}>                     
                                        <span className="nfd-text-[#111729] nfd-text-base nfd-font-bold">
                                            {__(category.name, "wp-module-solutions")}
                                        </span>
                                        {
                                            collapse ? 
                                            <ChevronDownIcon  className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={handleDisplay} />                                            
                                            : 
                                            <ChevronUpIcon className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={handleDisplay} />
                                        }
                                    </h2>
                                    {
                                        collapse && (
                                                        category.entitlements.map((entitlement) => {
                                                            return(
                                                                <div className="nfd-flex nfd-flex-row nfd-pb-4 nfd-mb-4 nfd-border-b nfd-border-[#DCE2EA]">                            
                                                                    <img className="entitlement-image" src={entitlement.image.primaryImage} />
                                                                    <div className="nfd-flex nfd-flex-col nfd-ml-4">
                                                                        <h2 className="nfd-text-[#000000] nfd-font-medium">{__(entitlement.name, "wp-module-solutions")}</h2>
                                                                        <p className="nfd-text-[#4A5567] nfd-font-normal nfd-mt-2">{__(entitlement.description, "wp-module-solutions" )}</p>                            
                                                                    </div>                
                                                                    <Button
                                                                        as="a"
                                                                        className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]" 
                                                                        href={ renderCTAUrl( entitlement.cta.url ) }
                                                                        variant="secondary"
                                                                    >
                                                                        { entitlement.cta.text }
                                                                    </Button>            
                                                                </div>
                                                    )
                                            })
                                        )
                                    }    
                                </>
                            )
                        })
                    }
                </>
            </Section.Content>           
        </Section.Container>
    )
}