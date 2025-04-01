import { Sidebar } from '../sidebar';
import { Tools } from '../tools';
import { UpgradeBanner } from 'common/components/upgrade-banner';
import { getActiveSolution } from 'common/utils';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

export const Content = () => {
	const hasSolution = !! getActiveSolution();

	const classes = classNames(
		'nfd-page-content',
		'nfd-flex nfd-relative nfd-gap-6 nfd-max-w-full nfd-my-0 nfd-flex-col md:nfd-flex-row',
		{
			'nfd-page-content--no-solution': ! hasSolution,
		}
	);

	return (
		<div className={ classes }>
			{
				! hasSolution &&
				<UpgradeBanner>
					{ __(
						'Start with a plan that fits your goals and unlock up to $3,500 in premium Bluehost and Yoast plugins.',
						'wp-module-solutions'
					) }
				</UpgradeBanner>
			}
			<Sidebar/>
			<main className="nfd-w-full">
				<Tools/>
			</main>
		</div>
	);
};
