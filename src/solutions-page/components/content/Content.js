import { Sidebar } from '../sidebar';
import { Tools } from '../tools';
import { UpgradeBanner } from 'common/components/upgrade-banner';
import { getActiveSolution } from 'common/utils';
import classNames from 'classnames';

export const Content = () => {
	const solution = getActiveSolution();

	const classes = classNames(
		'nfd-page-content',
		'nfd-flex nfd-relative nfd-gap-6 nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0',
		{
			'nfd-page-content--no-solution': ! solution
		}
	);

	return (
		<div className={ classes }>
			{ ! solution && <UpgradeBanner/> }
			<Sidebar/>
			<main className="nfd-w-full">
				<Tools/>
			</main>
		</div>
	);
};
