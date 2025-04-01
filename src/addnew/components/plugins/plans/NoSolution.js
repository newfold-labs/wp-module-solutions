import {getPlugins} from "../../utils";
import {Plugin} from "../plugin";
import {__} from "@wordpress/i18n";
import {Section} from "../../section";
import {UpgradeBanner} from "../../../../common/components/upgrade-banner";

export const NoSolution = ( { plan } ) => {
    let plugins = getPlugins({});
    let title = __('Premium tools available in our Solutions Bundles','wp-module-solutions');
    return (
        <>
            <Section title={title}>
                {__('Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.', 'wp-module-solutions')}
                <a
                    href="https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin"
                    target="_blank"
                    rel="noreferrer"
                >
                    {__(
                        'Learn more about our Solutions',
                        'wp-module-solutions'
                    )}
                </a>
            </Section>
            {
                !!plugins.length && (
                    <div className="nfd-plugins-card-list">
                        <UpgradeBanner secondaryTitle={__('The #1 Bundle of Commerce Tools','wp-module-solutions')}>
                            <p>
                                {__('A solution designed to help shop owners to boost their online sales with a massive bundle \n' +
                                    'of premium tools (value $3,500)','wp-module-solutions')}
                            </p>
                        </UpgradeBanner>
                        <div id="the-list">
                            {plugins.map((plugin) => (
                                <Plugin
                                    name={plugin?.name }
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
                                isBlock={true}
                                ctbHref={ plugin?.ctbHref }
                            />
                        ) ) }
                    </div>
            </div>
            ) }
        </>
    );
};
