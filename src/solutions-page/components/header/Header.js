import { BrandLogo } from '../brand-logo';
import { Title } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';
import { getActiveSolution } from 'common/utils';

export const Header = () => {
	const currentSolution = getActiveSolution();
	return (
		<div className="nfd-solutions-app-header nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8">
			<BrandLogo width={ '160px' } className="nfd-mb-6" />
			<Title>
				{ currentSolution
					? __(
							'Premium tools available in your {plan_name} solution',
							'wp-module-solutions'
					  ).replace( '{plan_name}', currentSolution.name )
					: __(
							'Premium tools available in our Solutions Bundles',
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
					href="https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin"
					target="_blank"
					rel="noreferrer"
				>
					{ __(
						'Learn more about our Solutions',
						'wp-module-solutions'
					) }
				</a>
			</p>
		</div>
	);
};
