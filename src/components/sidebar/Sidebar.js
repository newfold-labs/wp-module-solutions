import { SidebarNavigation, Title, TextInput } from '@newfold/ui-component-library';
import { FireIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { __ } from '@wordpress/i18n';
import { useCategory } from './../../contexts/CategoryContext';

export const Sidebar = () => {
	const categories = {};
	NewfoldSolutions.categories.map( cat => {
		categories[ cat.id ] = { label: cat.name };
	} );

	const { selectedCategory, changeCategory } = useCategory();

	const staticCategories = {
		popular: {
			label: __( 'Most popular', 'wp-module-solutions' ),
			icon: FireIcon
		},
		favourites: {
			label: __( 'Your Favourites', 'wp-module-solutions' ),
			icon: HeartIcon
		},
		premium: {
			label: __( 'Premium Tools', 'wp-module-solutions' ),
			icon: StarIcon
		}
	};

	const mergedCats = {
		'all': {
			label: __( 'All', 'wp-module-solutions' )
		},
		...categories,
		...staticCategories
	};

	return (
		<aside className={ 'nfd-solutions-sidebar' }>
			<SidebarNavigation activePath={ selectedCategory }>
				<SidebarNavigation.Sidebar className="nfd-w-[300px]">
					<div className="nfd-solutions-search nfd-flex nfd-flex-col">
						<Title as="h4">
							{ __( 'Search', 'wp-module-solutions' ) }
						</Title>
						<TextInput placeholder="Website URL"/>
					</div>
					<SidebarNavigation.MenuItem label="Categories" defaultOpen={ true } className={ 'nfd-hidden' }>
						{ Object.keys( mergedCats ).map( ( id ) =>
							<SidebarNavigation.SubmenuItem
								pathProp="id"
								id={ id }
								label={ mergedCats[ id ]?.label }
								key={ id }
								icon={ mergedCats[ id ]?.icon }
								onClick={ () => changeCategory( id ) }
							/>
						) }
					</SidebarNavigation.MenuItem>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		</aside>
	);
}
