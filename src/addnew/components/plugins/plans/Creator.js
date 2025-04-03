import { getPlugins } from '../../utils';
import { Plugin } from '../plugin';
import { __ } from '@wordpress/i18n';
import { Section } from '../../section';
import { UpgradeBanner } from '../../../../common/components/upgrade-banner';

export const Creator = ( { plan } ) => {
	const entitlements = getPlugins( { includePremium: false } );
	const premium = getPlugins( { includeEntitlements: false } );
	const title = __(
		'Premium tools available in your Creator Solution',
		'wp-module-solutions'
	);
	const titleUpgrade = __(
		'Upgrade to save & unlock 30 advanced tools',
		'wp-module-solutions'
	);
	return (
		<>
			<Section title={ title }>
				{ __(
					'Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.',
					'wp-module-solutions'
				) }
				<a
					href="https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin"
					target="_blank"
					rel="noreferrer"
				>
					{ __(
						'Learn more about our Solutions',
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
						{ ' ' }
						{ __(
							'No matter what you sell or how you run your store, this is the Ultimate e-commerce toolkit — packed with everything you need at an unbeatable price!',
							'wp-module-solutions'
						) }{ ' ' }
					</strong>
					<a
						href="https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin"
						target="_blank"
						rel="noreferrer"
					>
						{ __(
							'Learn more about our Solutions',
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
								'A solution designed to help shop owners to boost their online sales with a massive bundle \n' +
									'of premium tools (value $3,500)',
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
