import { EmptySearchIcon } from 'common/components/icons';
import { Title } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';
import { useFilter } from '../../contexts/FilterContext';

export const EmptyTools = () => {
	const { search } = useFilter();

	return (
		<div className="nfd-solutions-tools--empty nfd-flex nfd-flex-col nfd-items-center nfd-justify-center nfd-gap-5 nfd-max-w-3xl nfd-h-full nfd--mt-12">
			<EmptySearchIcon className={ 'nfd-solutions-tools--empty__icon' }/>
			<Title as="h2">
				{ __( 'No matching tools for \'{search}\'', 'wp-module-solutions' ).replace( '{search}', search ) }
			</Title>
			<p>
				{ __(
					'Check the spelling or try another keyword',
					'wp-module-solutions'
				) }
			</p>
		</div>
	);
};
