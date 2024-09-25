import { Button } from "@newfold/ui-component-library";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import classNames from "classnames";


export function MyPluginsAndToolsCard(props){

    const [collapse, setCollapse] = useState(false)
    const handleDisplay = () => {
        setCollapse(!collapse)
    }
    const { title, pluginsTools } = props;

    return(
        <>
            <h2 className={classNames('nfd-mt-8', 'nfd-mb-8', 'nfd-flex', 'nfd-flex-row', 'nfd-cursor-pointer',
                            { 'nfd-border-b nfd-border-[#CBD5E1] nfd-pb-4': !collapse, })} onClick={handleDisplay}>                     
                <span className="nfd-text-[#111729] nfd-text-base nfd-font-bold">
                    {__(title, "wp-module-solutions")}
                </span>
                {
                    collapse ? 
                    <Icon icon={chevronDown} className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={handleDisplay} />
                    : 
                    <Icon icon={chevronUp} className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" onClick={handleDisplay} />
                }
            </h2>
            {
                collapse ?
                pluginsTools.map((plugin, index) => {
                    let iconUrl = window.location.origin+"/wp-content/plugins/bluehost-wordpress-plugin/vendor/newfold-labs/wp-module-solutions/src/icons/"+plugin.image['primaryImage']+".svg";
                    return (
                        <div className="nfd-flex nfd-flex-row nfd-pb-4 nfd-mb-4 nfd-border-b nfd-border-[#DCE2EA]">                            
                            <object type="image/svg+xml" id={plugin.name.replace(/\s/g, '')+'_'+index} height="48" width="48" data={iconUrl}></object>
                            <div className="nfd-flex nfd-flex-col nfd-ml-4">
                                <h2 className="nfd-text-[#000000] nfd-font-medium">{__(plugin.name, "wp-module-solutions")}</h2>
                                <p className="nfd-text-[#4A5567] nfd-font-normal nfd-mt-2">{__(plugin.description, "wp-module-solutions" )}</p>                            
                            </div>                            
                            <Button as="a" href="" className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]" variant="secondary">
                                {
                                    plugin.status === "active" ? 
                                    plugin.name==="WonderBlocks" ? __("Build a Webpage",  "wp-module-solutions") 
                                    :
                                    plugin.name==="Customize My Account Page" ? __("Customize",  "wp-module-solutions") 
                                    :
                                    plugin.name==="Product Filters" ? __("Setup",  "wp-module-solutions") 
                                    :
                                    plugin.name==="Product Search" ? __("Configure",  "wp-module-solutions") 
                                    :
                                    plugin.name==="Setup Wishlists" ? __("Setup Wishlists",  "wp-module-solutions") 
                                    :
                                    plugin.name==="ecomdash" ? __("Manage Sales Channels",  "wp-module-solutions") 
                                    :
                                    plugin.name==="Gift Cards" ? __("Configure Gift Cards",  "wp-module-solutions") 
                                    :
                                    plugin.name==="WonderCart" ? __("Create a Campaign",  "wp-module-solutions") 
                                    : __("Manage", "wp-module-solutions") : __("Install", "wp-module-solutions")
                                }
                            </Button>
                        </div>
                    )
                }) 
                :
                null
            }
        </>
    )
}