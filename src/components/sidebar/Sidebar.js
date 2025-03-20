import { SidebarNavigation, Title, TextInput } from '@newfold/ui-component-library';
import { FireIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export const Sidebar = () => {
	const categories = {
		first: { label: 'First' },
		second: { label: 'Second' },
		third: { label: 'Third' }
	};
	const staticCategories = {
		popular: { label: 'Most popular', icon: FireIcon },
		favourites: { label: 'Your Favourites', icon: HeartIcon },
		premium: { label: 'Premium Tools', icon: StarIcon }
	};

	const mergedCats = { ...categories, ...staticCategories }

	return (
		<aside className={ 'nfd-solutions-sidebar' }>
			<SidebarNavigation>
				<SidebarNavigation.Sidebar className="nfd-w-[300px]">
					<div className="nfd-solutions-search nfd-flex nfd-flex-col">
						<Title as="h4">
							Search
						</Title>
						<TextInput placeholder="Website URL"/>
					</div>
					<SidebarNavigation.MenuItem label="Categories" defaultOpen={ true } className="nfd-hidden nfd-solutions-categories">
						{ Object.keys( mergedCats ).map( ( id ) =>
							<SidebarNavigation.SubmenuItem
								id={ id }
								label={ mergedCats[ id ]?.label }
								key={ id }
								href={ '#' + id }
								icon={ mergedCats[ id ]?.icon }
							/>
						) }
					</SidebarNavigation.MenuItem>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		</aside>
	);
}
