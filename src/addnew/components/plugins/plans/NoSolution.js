import { getPlugins } from '../../utils';
import { Plugin } from '../plugin';
import { __ } from '@wordpress/i18n';
import { Section } from '../../section';
import { UpgradeBanner } from '../../../../common/components/upgrade-banner';

export const NoSolution = ( { plan } ) => {
	const plugins = getPlugins( {} );
	const title = __(
		'Premium tools available in our eCommerce Add-Ons',
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
						'Learn more about our eCommerce Add-Ons',
						'wp-module-solutions'
					) }
				</a>
			</Section>
			{ !! plugins.length && (
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
				</div>
			) }
		</>
	);
};
