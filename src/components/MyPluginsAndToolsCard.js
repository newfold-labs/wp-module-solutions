import { Button } from "@newfold/ui-component-library";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Section } from "./Section";

export function MyPluginsAndToolsCard(props){
    const { tittle, pluginsTools } = props;
    return(
        <>
            <h2>{__(tittle, "wp-module-solutions")}</h2>
            {
                pluginsTools.map((plugin) => {
                return (
                    <div>
                        <h2>{__(plugin.name, "wp-module-solutions")}</h2>
                        <p>{__(plugin.description, "wp-module-solutions" )}</p>
                        <Button as="a" href="">
                            {
                                plugin.status === "active" ? __("Manage", "wp-module-solutions") : __("Install", "wp-module-solutions")
                            }
                        </Button>
                    </div>
                )
                }) 
            }
        </>
    )
}