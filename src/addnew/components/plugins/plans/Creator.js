import {getPlugins} from "../../utils";
import {Plugin} from "../plugin";
import {__} from "@wordpress/i18n";
import {Section} from "../../section";
import {UpgradeBanner} from "../../../../common/components/upgrade-banner";

export const Creator = ( { plan } ) => {
    let entitlements = getPlugins({ includePremium: false });
    let premium = getPlugins({ includeEntitlements: false });
    let title = __('Premium tools available in your Creator Solution','wp-module-solutions');
    let titleUpgrade = __('Upgrade to save & unlock 30 advanced tools', 'wp-module-solutions');
    return (
        <>
            <Section title={title}>
                { __('Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.', 'wp-module-solutions') }
                <a href="#">{__('Learn more about our Solutions','wp-module-solutions') + ' ->'}</a>
            </Section>
            { !! entitlements.length && (
                <div id="the-list">
                    { entitlements.map( ( plugin ) => (
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
            <Section title={titleUpgrade}>
                <span>{__('Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.', 'wp-module-solutions')}</span>
                <span>
                    <strong> {__('No matter what you sell or how you run your store, this is the Ultimate e-commerce toolkit — packed with everything you need at an unbeatable price!', 'wp-module-solutions')} </strong>
                    <a href="#">{__('Learn more about our Solutions', 'wp-module-solutions') + ' ->'}</a></span>
            </Section>
            {!!premium.length && (
                <div id="the-list">
                    <UpgradeBanner />
                    {premium.map( ( plugin ) => (
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
