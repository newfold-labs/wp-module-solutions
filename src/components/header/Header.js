import { BrandLogo } from '../brand-logo';
import { Title } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';

export const Header = () => {
	return (
		<div className="nfd-solutions-app-header nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8">
			<BrandLogo width={ '140px' } className="nfd-mb-8" />
			<Title>
				{ __(
					'Premium tools available in your Commerce solution',
					'wp-module-solutions'
				) }
			</Title>
			<p>
				{ __(
					'Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.',
					'wp-module-solutions'
				) }
				<br />
				<a href={ '#' }>
					{ __(
						'Learn more about our Solutions',
						'wp-module-solutions'
					) }
				</a>
			</p>
		</div>
	);
};
