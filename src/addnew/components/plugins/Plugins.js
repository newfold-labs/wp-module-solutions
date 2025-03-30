import { getPlugins } from "../utils";
import { Plugin } from "./plugin";
import { EmptyPlugins} from "./EmptyPlugins";

export const Plugins = () => {
    let plugins = getPlugins({});
    return (
        <>
            { ! plugins && <EmptyPlugins /> }
            { !! plugins.length && (
                <div className="nfd-solutions-plugins nfd-grid nfd-gap-4">
                    { plugins.map( ( plugin ) => (
                        <Plugin
                            name={ plugin?.name }
                            category={ plugin.category }
                            description={ plugin.description }
                            href={ plugin.cta?.url.replace(
                                '{siteUrl}',
                                NewfoldSolutions.siteUrl
                            ) }
                            icon={ plugin?.image?.primaryImage }
                            premium={ plugin?.premium }
                            popular={ plugin?.popular }
                            key={ plugin?.name }
                            isActive={ plugin?.isActive }
                            plsProvider={ plugin?.plsProviderName }
                            plsSlug={ plugin?.plsSlug }
                            ctbId={ plugin?.ctbId }
                            ctbHref={ plugin?.ctbHref }
                        />
                    ) ) }
                </div>
            ) }
        </>
    );
};
