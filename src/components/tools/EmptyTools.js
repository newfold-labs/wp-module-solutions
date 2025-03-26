import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Title } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';

export const EmptyTools = () => {
	return <div className="nfd-solutions-tools--empty nfd-flex nfd-flex-col nfd-items-center nfd-justify-center nfd-gap-5 nfd-max-w-3xl nfd-h-full nfd--mt-12">
		<MagnifyingGlassIcon className={ 'nfd-solutions-tools--empty__icon' } width={ 150 }/>
		<Title as="h2">{ __( 'No matching tools', 'wp-module-solutions' ) }</Title>
		<p>{ __( 'Check the spelling or try another keyword', 'wp-module-solutions' ) }</p>
	</div>;
}