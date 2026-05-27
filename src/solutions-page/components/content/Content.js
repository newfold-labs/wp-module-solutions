import { FilterBar } from '../filter-bar';
import { Tools } from '../tools';
import { UpgradeBanner } from 'common/components/upgrade-banner';
import { getActiveSolution } from 'common/utils';
import { getSolutionsBranding } from 'common/utils/branding';
import classNames from 'classnames';
import { __, sprintf } from '@wordpress/i18n';
import { FilterProvider } from '../../contexts/FilterContext';
import { useMemo } from 'react';
import './style.scss';

export const Content = () => {
	const hasSolution = !! getActiveSolution();
	const brand = useMemo( () => getSolutionsBranding(), [] );
	const brandName =
		typeof brand.brandDisplayName === 'string' ? brand.brandDisplayName : '';

	const classes = classNames(
		'nfd-page-content',
		'nfd-flex nfd-relative nfd-gap-6 nfd-max-w-full nfd-my-0 nfd-flex-col',
		{
			'nfd-page-content--no-solution': ! hasSolution,
		}
	);

	return (
		<FilterProvider>
			<div className={ classes }>
				{ ! hasSolution && (
					<UpgradeBanner>
						{ sprintf(
							/* translators: %s: Hosting brand label (localized) */
							__(
								'Start with a plan that fits your goals and unlock up to $3,500 in premium %s and Yoast plugins.',
								'wp-module-solutions'
							),
							brandName
						) }
					</UpgradeBanner>
				) }
				<FilterBar />
				<main className="nfd-w-full">
					<Tools />
				</main>
			</div>
		</FilterProvider>
	);
};
