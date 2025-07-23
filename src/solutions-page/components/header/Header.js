import { BrandLogo } from '../brand-logo';
import { Title } from '@newfold/ui-component-library';
import { __, sprintf } from '@wordpress/i18n';
import { getActiveSolution } from 'common/utils';

export const Header = () => {
	const currentSolution = getActiveSolution();
	return (
		<div className="nfd-solutions-app-header nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8">
			<BrandLogo width={ '160px' } className="nfd-mb-6" />
			<Title>
				{ currentSolution
					? sprintf(
							/* translators: %s: Add-on Name */
							__(
								'Powerful Plugins Included in your %s',
								'wp-module-solutions'
							),
							currentSolution.name
					  )
					: __(
							'Premium tools available in eCommerce Add-Ons',
							'wp-module-solutions'
					  ) }
			</Title>
			<p>
				{ __(
					'Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.',
					'wp-module-solutions'
				) }
				<br />
				<a
					href="https://www.bluehost.com/help/article/wp-solutions?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=brand_plugin"
					target="_blank"
					rel="noreferrer"
				>
					{ __(
						'Learn more about eCommerce Add-Ons',
						'wp-module-solutions'
					) }
				</a>
			</p>
		</div>
	);
};
