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
		'nfd-flex nfd-relative nfd-gap-6 nfd-max-w-full nfd-my-0 nfd-flex-col min-[782px]:nfd-flex-row',
		{
			'nfd-page-content--no-solution': ! hasSolution,
		}
	);

	return (
		<div className={ classes }>
            { hasSolution && ( <Sidebar /> ) }
			<main className="nfd-w-full">
				<Tools />
			</main>
		</div>
	);
};
