import { Select } from '@newfold/ui-component-library';
import { useFilter } from '../../contexts/FilterContext';
import { getSolutionsCategories } from 'common/utils';
import './style.scss';

export const CategorySelector = () => {
	const categories = getSolutionsCategories();
	const { category, setCategory } = useFilter();

	return 			<Select
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
			</Select>;
};
