import { SidebarNavigation, Title, TextInput } from '@newfold/ui-component-library';
import { FireIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { __ } from '@wordpress/i18n';
import { useCategory } from './../../contexts/CategoryContext';

export const Sidebar = () => {
	const categories = [];
	NewfoldSolutions.categories.map( cat => {
		categories.push( {
			id: cat.id,
			label: cat.name
		} );
	} );

	const { selectedCategory, changeCategory } = useCategory();

	const staticCategories = [
		{
			id: 'popular',
			label: __( 'Most popular', 'wp-module-solutions' ),
			icon: FireIcon
		},
		{
			id: 'premium',
			label: __( 'Premium Tools', 'wp-module-solutions' ),
			icon: StarIcon
		}
	];

	const mergedCats = [
		{
			id: 'all',
			label: __( 'All', 'wp-module-solutions' )
		},
		...categories,
		...staticCategories
	];

	return (
		<aside className={ 'nfd-solutions-sidebar' }>
			<SidebarNavigation activePath={ selectedCategory }>
				<SidebarNavigation.Sidebar className="nfd-w-[300px]">
					<div className="nfd-solutions-search nfd-flex nfd-flex-col nfd-gap-4 nfd-mb-8">
						<Title as="h4">
							{ __( 'Search', 'wp-module-solutions' ) }
						</Title>
						<TextInput/>
					</div>
					<SidebarNavigation.MenuItem label="Categories" defaultOpen={ true } className={ 'nfd-hidden' }>
						<Title as="h4" className="nfd-solutions-categories-title nfd-mb-4">
							{ __( 'Categories', 'wp-module-solutions' ) }
						</Title>
						{ mergedCats.map( cat =>
							<SidebarNavigation.SubmenuItem
								pathProp="id"
								id={ cat.id }
								label={ cat.label }
								key={ cat.id }
								icon={ cat.icon }
								onClick={ () => changeCategory( cat.id ) }
							/>
						) }
					</SidebarNavigation.MenuItem>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		</aside>
	);
}
