import { Button } from "@newfold/ui-component-library";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Section } from "./Section";
import { PluginList, core_tools, content_monetization, customer_engagement, product_management, sales_and_checkout, search_engine_optimization, store_operations } from "../constants";
// import { ReactComponent as GreenTick } from "../icons/green-tick.svg";


export function MyPluginsAndToolList(props){
    
    //console.log(props, "props", Object.values(PluginList)[0], 'plugin list');

    const PluginListArray = Object.values(PluginList)[0];

    let core = [], content = [], customer = [], product = [], sales = [], seo = [], store = [];

    PluginListArray.map((plugin, index)=>{
    return(
            core_tools.includes(plugin['name']) ? core.push(plugin) : 
            content_monetization.includes(plugin['name']) ? content.push(plugin) : 
            customer_engagement.includes(plugin['name']) ? customer.push(plugin) :
            product_management.includes(plugin['name']) ? product.push(plugin) :
            sales_and_checkout.includes(plugin['name']) ? sales.push(plugin) :
            search_engine_optimization.includes(plugin['name']) ? seo.push(plugin) : store.push(plugin))
    });

    //console.log(core, "core", content, "content", customer, "customer", product, "product", sales, "sales", seo, "seo", store, "store")

    return(                           
                <Section.Container>
                    <Section.Header
                    title={__("My Plugins & Tools", "wp-module-solutions")}
                    anchor={{title : __( "Add a New Plugin", "wp-module-solutions" ), className:"nfd-text-[#196CDF]" }} 
                    />
                    <Section.Content className="nfd-core-tool-mypluginsntools">            
                        {/* {
                            <>
                                <h2>{__("Core Tools", "wp-module-solutions")}</h2>
                                {
                                    core.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Content Monetization", "wp-module-solutions")}</h2>
                                {
                                    content.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Customer Engagement", "wp-module-solutions")}</h2>
                                {
                                    customer.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Product Management", "wp-module-solutions")}</h2>
                                {
                                    product.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Sales & Checkout", "wp-module-solutions")}</h2>
                                {
                                    sales.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Search Engine Optimization", "wp-module-solutions")}</h2>
                                {
                                    seo.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }
                                <h2>{__("Store Operations", "wp-module-solutions")}</h2>       
                                {
                                    store.map((plugin, index) => {
                                    return (
                                        <div>
                                            <h2>{plugin.name}</h2>
                                            <p>{plugin.description}</p>
                                        </div>
                                    )
                                    }) 
                                }                     
                            </>

                        } */}
                    </Section.Content>
                </Section.Container>     
    )
}