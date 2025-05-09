import { Header } from '../header';
import { Content } from '../content';
import { Page } from '@newfold/ui-component-library';
import { useViewportMatch } from '@wordpress/compose';
import classNames from 'classnames';

export const SolutionsPage = () => {
	const isLargeViewport = useViewportMatch( 'medium' );
	const classes = classNames( [
		'nfd-solutions-app-container',
		'nfd-page',
		'min-[783px]:nfd-p-8 min-[783px]:nfd-flex nfd-gap-6 nfd-my-0',
		{
			'nfd-solutions-app-container--mobile': ! isLargeViewport,
		},
	] );
	return (
		<Page className={ classes }>
			<Header />
			<Content />
		</Page>
	);
};
