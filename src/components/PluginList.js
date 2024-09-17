import { Button } from "@newfold/ui-component-library";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Section } from "./Section";
// import { ReactComponent as GreenTick } from "../icons/green-tick.svg";


export function PluginList(){
    return( 
        <Section>
            <Section.Content className="nfd-core-tool-mypluginsntools">
                <div>
                    {__("Hi I am plugin list component", "wp-module-solutions")}

                </div> 
            </Section.Content>
        </Section>        
    )
}