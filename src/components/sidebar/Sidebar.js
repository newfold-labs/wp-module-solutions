import {
	SidebarNavigation,
	Title,
	TextInput,
} from '@newfold/ui-component-library';
import { FireIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { __ } from '@wordpress/i18n';
import { useFilter } from '../../contexts/FilterContext';

export const Sidebar = () => {
	const { search, setSearch } = useFilter();
	const categories = [];
	NewfoldSolutions.categories.map( ( cat ) => {
		const { slug: id, name: label, priority, count } = cat;
		categories.push( { id, label, priority, count } );
	} );

	categories.sort( ( a, b ) => ( a.priority > b.priority ? -1 : 1 ) );

	const { category, setCategory } = useFilter();

	const staticCategories = [
		{
			id: 'popular',
			label: __( 'Most popular', 'wp-module-solutions' ),
			icon: FireIcon,
		},
		{
			id: 'premium',
			label: __( 'Premium Tools', 'wp-module-solutions' ),
			icon: StarIcon,
		},
	];

	const mergedCats = [
		{
			id: 'all',
			label: __( 'All', 'wp-module-solutions' ),
		},
		...categories,
		...staticCategories,
	];

	return (
		<aside className={ 'nfd-solutions-sidebar' }>
			<SidebarNavigation activePath={ category }>
				<SidebarNavigation.Sidebar className="nfd-w-[300px]">
					<div className="nfd-solutions-search nfd-flex nfd-flex-col nfd-gap-4 nfd-mb-8">
						<Title as="h4">
							{ __( 'Search', 'wp-module-solutions' ) }
						</Title>
						<TextInput
							value={ search }
							onChange={ ( e ) => {
								setSearch( e.target.value );
							} }
						/>
					</div>
					<SidebarNavigation.MenuItem
						label="Categories"
						defaultOpen={ true }
						className={ 'nfd-hidden' }
					>
						<Title
							as="h4"
							className="nfd-solutions-categories-title nfd-mb-4"
						>
							{ __( 'Categories', 'wp-module-solutions' ) }
						</Title>
						{ mergedCats.map( ( cat ) => (
							<SidebarNavigation.SubmenuItem
								pathProp="id"
								id={ cat.id }
								label={
									cat.label +
									( cat?.count ? ` (${ cat.count })` : '' )
								}
								key={ cat.id }
								icon={ cat.icon }
								onClick={ () => setCategory( cat.id ) }
							/>
						) ) }
					</SidebarNavigation.MenuItem>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		</aside>
	);
};
