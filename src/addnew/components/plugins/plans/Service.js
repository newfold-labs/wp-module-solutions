import { getPlugins } from '../../utils';
import { Plugin } from '../plugin';
import { __, sprintf } from '@wordpress/i18n';
import { Section } from '../../section';
import { UpgradeBanner } from '../../../../common/components/upgrade-banner';
import { getActiveSolution } from 'common/utils';
import {useEffect, useState} from "react";

export const Service = ( { plan } ) => {
	const entitlements = getPlugins( { includePremium: false } );
	const premium = getPlugins( { includeEntitlements: false } );
	const currentSolution = getActiveSolution();
	const title = sprintf(
		/* translators: %s: Add-on Name */
		__( 'Powerful Plugins Included in your %s', 'wp-module-solutions' ),
		currentSolution.name
	);
	const titleUpgrade = __(
		'Upgrade to save & unlock more advanced tools',
		'wp-module-solutions'
	);
    const [learMoreLink, setLearnMoreLink] = useState('https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin');
    //Add UTM parameters to the link if the function is available
    useEffect(() => {
        const interval = setTimeout(() => {
            if (
                window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof Function
            ) {
                const addLearnMoreParamsLink = window.NewfoldRuntime.linkTracker.addUtmParams(learMoreLink);
                setLearnMoreLink(addLearnMoreParamsLink);
            }
        }, 200);

        return () => clearTimeout(interval);
    }, []);
	return (
		<>
			<Section title={ title }>
				{ __(
					'Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.',
					'wp-module-solutions'
				) }
				<a
					href={learMoreLink}
					target="_blank"
					rel="noreferrer"
				>
					{ __(
						'Learn more about our eCommerce Add-Ons',
						'wp-module-solutions'
					) }
				</a>
			</Section>
			{ !! entitlements.length && (
				<div className="nfd-plugins-card-list">
					<div id="the-list">
						{ entitlements.map( ( plugin ) => (
							<Plugin
								name={ plugin?.name }
								category={ plugin.category }
								description={ plugin.description }
								icon={ plugin?.image?.primaryImage }
								premium={ plugin?.premium }
								popular={ plugin?.popular }
								key={ plugin?.name }
								isActive={ plugin?.isActive }
								plsProvider={ plugin?.plsProviderName }
								plsSlug={ plugin?.plsSlug }
								ctbId={ plugin?.ctbId }
								ctbHref={ plugin?.ctbHref }
								ctaUrl={ plugin?.cta?.url }
								ctaLabel={ plugin?.cta?.text }
								download={ plugin?.download }
								basename={ plugin?.basename }
							/>
						) ) }
					</div>
				</div>
			) }
			<Section title={ titleUpgrade }>
				<span>
					{ __(
						'Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.',
						'wp-module-solutions'
					) }
				</span>
				<span>
					<strong>
						{ __(
							'No matter what you sell or how you run your store, this is the Ultimate e-commerce toolkit — packed with everything you need at an unbeatable price!',
							'wp-module-solutions'
						) }
					</strong>
					<a
						href={learMoreLink}
						target="_blank"
						rel="noreferrer"
					>
						{ __(
							'Learn more about our eCommerce Add-Ons',
							'wp-module-solutions'
						) }
					</a>
				</span>
			</Section>
			{ !! premium.length && (
				<div className="nfd-plugins-card-list">
					<UpgradeBanner
						secondaryTitle={ __(
							'The #1 Bundle of Commerce Tools',
							'wp-module-solutions'
						) }
					>
						<p>
							{ __(
								'Add-Ons designed to help shop owners to boost their online sales with a massive bundle of premium tools (value $3,500)',
								'wp-module-solutions'
							) }
						</p>
					</UpgradeBanner>
					<div id="the-list">
						{ premium.map( ( plugin ) => (
							<Plugin
								name={ plugin?.name }
								category={ plugin.category }
								description={ plugin.description }
								icon={ plugin?.image?.primaryImage }
								premium={ plugin?.premium }
								popular={ plugin?.popular }
								key={ plugin?.name }
								displayAsPremiun={ true }
								isBlock={ true }
							/>
						) ) }
					</div>
				</div>
			) }
		</>
	);
};
