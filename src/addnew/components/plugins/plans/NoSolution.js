import {getPlugins} from "../../utils";
import {Plugin} from "../plugin";
import {__} from "@wordpress/i18n";
import {Section} from "../../section";

export const NoSolution = ( { plan } ) => {
    let plugins = getPlugins({});
    let title = __('Premium tools available in our Solutions Bundles','wp-module-solutions');
    return (
        <>
        <Section title={title}>
            {__('Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.', 'wp-module-solutions')}
            <a href="#">{__('Learn more about our Solutions', 'wp-module-solutions') + ' ->'}</a>
        </Section>
    {
        !!plugins.length && (
            <div id="the-list">
                {plugins.map((plugin ) => (
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
