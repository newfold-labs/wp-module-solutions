import { EmptySearchIcon } from 'common/components/icons';
import { Title } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';
import { useFilter } from '../../contexts/FilterContext';

export const EmptyTools = () => {
	const { search, updateSearch } = useFilter();

	return (
		<div className="nfd-solutions-tools--empty nfd-flex nfd-flex-col nfd-items-center nfd-justify-center nfd-gap-5 nfd-h-full nfd--mt-12">
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
			<a className={'nfd-solutions-tools--empty__return-to-list nfd-cursor-pointer visited:nfd-text-inherit'} onClick={ () => updateSearch( '' ) }>
				{ __( 'Return to the tools list', 'wp-module-solutions' ) }
			</a>
		</div>
	);
};
