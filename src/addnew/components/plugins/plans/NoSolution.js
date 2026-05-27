import { getPlugins } from '../../utils';
import { Plugin } from '../plugin';
import { __, sprintf } from '@wordpress/i18n';
import { Section } from '../../section';
import { UpgradeBanner } from '../../../../common/components/upgrade-banner';
import { getSolutionsBranding } from 'common/utils/branding';
import { useEffect, useMemo, useState } from 'react';

export const NoSolution = ( { plan } ) => {
	const plugins = getPlugins( {} );
	const title = __(
		'Premium tools available in our eCommerce Add-Ons',
		'wp-module-solutions'
	);

	const brand = useMemo( () => getSolutionsBranding(), [] );
	const brandName =
		typeof brand.brandDisplayName === 'string' ? brand.brandDisplayName : '';

	const initialLearnMoreUrl =
		typeof brand.urls?.accountCenterLearnMore === 'string'
			? brand.urls.accountCenterLearnMore
			: '';

	const [ learnMoreLink, setLearnMoreLink ] = useState(
		initialLearnMoreUrl
	);

	useEffect( () => {
		const timer = window.setTimeout( () => {
			if (
				window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof
				Function
			) {
				setLearnMoreLink(
					window.NewfoldRuntime.linkTracker.addUtmParams(
						initialLearnMoreUrl
					)
				);
			}
		}, 200 );

		return () => window.clearTimeout( timer );
	}, [ initialLearnMoreUrl ] );

	return (
		<>
			<Section
				title={ title }
				titleTestId="nfd-solutions-addnew-primary-title"
			>
				{ sprintf(
					/* translators: %s: Hosting brand label (localized) */
					__(
						'Discover the complete list of advanced features provided by your hosting provider %s, designed to deliver unmatched value and elevate your online experience.',
						'wp-module-solutions'
					),
					brandName
				) }
				{ learnMoreLink.trim() ? (
					<>
						{ ' ' }
						<a
							href={ learnMoreLink }
							target="_blank"
							rel="noreferrer"
						>
							{ __(
								'Learn more about our eCommerce Add-Ons',
								'wp-module-solutions'
							) }
						</a>
					</>
				) : null }
			</Section>
			<div
				className="nfd-plugins-card-list nfd-page-no-solution"
				data-testid="nfd-solutions-plugins-list-entitlements"
			>
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
				{ !! plugins.length && (
					<div id="the-list">
						{ plugins.slice( 0, 6 ).map( ( plugin ) => (
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
				) }
			</div>
		</>
	);
};
