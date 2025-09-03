import { Title, Select, TextField } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';
import { useFilter } from '../../contexts/FilterContext';
import { getSolutionsCategories } from 'common/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const SearchField = () => {
	const { search, updateSearch } = useFilter();
	return (
		<div className="nfd-solutions-search">
			<TextField
				placeholder={ __( 'Search tool', 'wp-module-solutions' ) }
				value={ search }
				onChange={ ( e ) => {
					updateSearch( e.target.value );
				} }
				icon={ MagnifyingGlassIcon }
			/>
		</div>
	);
};

export const FilterBar = () => {
	const categories = getSolutionsCategories();
	const { category, setCategory } = useFilter();

	return <div className={ 'nfd-solutions-filter-bar nfd-w-full nfd-flex nfd-justify-between' }>
		<div className="nfd-solutions-filter-bar-categories nfd-flex nfd-items-center nfd-gap-4 nfd-flex-1">
			{ __( 'Filter by type', 'wp-module-solutions' ) }
			<Select
				onChange={ setCategory }
				value={ category || 'all' }
				id={ 'nfd-solutions-category-selector' }
				className={ 'nfd-solutions-category-selector nfd-min-w-[250px]' }
				selectedLabel={
					categories.find(
						( cat ) => cat.id === (category || 'all')
					).label
				}
			>
				{ categories.map( ( cat ) => (
					<Select.Option
						label={ cat.label }
						value={ cat.id }
						className={
							'nfd-solutions-category-selector__' + cat.id
						}
						key={ cat.id }
					/>
				) ) }
			</Select>
		</div>
		<SearchField/>
	</div>;
};
