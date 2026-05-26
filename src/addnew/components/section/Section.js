import { Title } from '@newfold/ui-component-library';

export const Section = ( { title, children, titleTestId } ) => {
	return (
		<div className="nfd-app-section nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8">
			{ title && (
				<Title data-testid={ titleTestId }>{ title }</Title>
			) }
			{ children }
		</div>
	);
};
