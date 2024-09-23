import { Button } from "@newfold/ui-component-library";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Section } from "./Section";
import { PluginList, 
        core_tools, 
        content_monetization, 
        customer_engagement, 
        product_management, 
        sales_and_checkout, 
        search_engine_optimization,
        store_operations } from "../constants";
import { MyPluginsAndToolsCard } from "./MyPluginsAndToolsCard";
// import { ReactComponent as GreenTick } from "../icons/green-tick.svg";


export function MyPluginsAndToolList(props){

    //console.log(props, "props", Object.values(PluginList)[0], 'plugin list');

    const PluginListArray = Object.values(PluginList)[0];

    let core = [], content = [], customer = [], product = [], sales = [], seo = [], store = [];

    PluginListArray.map((plugin)=>{
    return(
            core_tools.includes(plugin['slug']) ? core.push(plugin) : 
            content_monetization.includes(plugin['slug']) ? content.push(plugin) : 
            customer_engagement.includes(plugin['slug']) ? customer.push(plugin) :
            product_management.includes(plugin['slug']) ? product.push(plugin) :
            sales_and_checkout.includes(plugin['slug']) ? sales.push(plugin) :
            search_engine_optimization.includes(plugin['slug']) ? seo.push(plugin) : store.push(plugin))
    });

    //console.log(core, "core", content, "content", customer, "customer", product, "product", sales, "sales", seo, "seo", store, "store")

    return(                           
                <Section.Container>
                    <Section.Header
                    title={__("My Plugins & Tools", "wp-module-solutions")}
                    anchor={{title : __( "Add a New Plugin", "wp-module-solutions" ), className:"nfd-text-[#196CDF]" }} 
                    />
                    <Section.Content className="nfd-core-tool-mypluginsntools">            
                        <>                        
                            <MyPluginsAndToolsCard tittle="Core Tools" pluginsTools={core} />
                            <MyPluginsAndToolsCard tittle="Content Monetization" pluginsTools={content} />
                            <MyPluginsAndToolsCard tittle="Customer Engagement" pluginsTools={customer} />
                            <MyPluginsAndToolsCard tittle="Product Management" pluginsTools={product} />
                            <MyPluginsAndToolsCard tittle="Sales & Checkout" pluginsTools={sales} />
                            <MyPluginsAndToolsCard tittle="Search Engine Optimization" pluginsTools={seo} />
                            <MyPluginsAndToolsCard tittle="Store Operations" pluginsTools={store} />
                        </>                        
                    </Section.Content>
                </Section.Container>     
    )
}