import { BrandLogo } from '../brand-logo';
import { Title } from '@newfold/ui-component-library';
import { __, sprintf } from '@wordpress/i18n';
import { getSolutionsBranding } from 'common/utils/branding';
import { getActiveSolution } from 'common/utils';
import { useMemo, useState, useEffect } from 'react';

export const Header = () => {
	const currentSolution = getActiveSolution();
	const brand = useMemo( () => getSolutionsBranding(), [] );
	const brandName =
		typeof brand.brandDisplayName === 'string' ? brand.brandDisplayName : '';

	const initialHelpUrl =
		typeof brand.urls?.helpArticleSolutions === 'string'
			? brand.urls.helpArticleSolutions
			: '';

	const [ helpUrl, setHelpUrl ] = useState( initialHelpUrl );

	useEffect( () => {
		const timer = window.setTimeout( () => {
			if (
				window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof
				Function
			) {
				setHelpUrl(
					window.NewfoldRuntime.linkTracker.addUtmParams(
						initialHelpUrl
					)
				);
			}
		}, 200 );

		return () => window.clearTimeout( timer );
	}, [ initialHelpUrl ] );

	return (
		<div
			className="nfd-solutions-app-header nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8"
			data-testid="nfd-solutions-app-header"
		>
			<BrandLogo width={ '160px' } className="nfd-mb-6" />
			<Title data-testid="nfd-solutions-page-title">
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
				{ sprintf(
					/* translators: %s: Hosting brand label (localized), e.g. Bluehost */
					__(
						'Discover the complete list of advanced features provided by your hosting provider %s, designed to deliver unmatched value and elevate your online experience.',
						'wp-module-solutions'
					),
					brandName
				) }
				{ helpUrl.trim() ? (
					<>
						<br />
						<a href={ helpUrl } target="_blank" rel="noreferrer">
							{ __(
								'Learn more about eCommerce Add-Ons',
								'wp-module-solutions'
							) }
						</a>
					</>
				) : null }
			</p>
		</div>
	);
};
