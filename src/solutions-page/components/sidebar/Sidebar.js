import {
	SidebarNavigation,
	Title,
	TextInput,
	Select,
} from '@newfold/ui-component-library';
import { useViewportMatch } from '@wordpress/compose';
import { FireIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { __ } from '@wordpress/i18n';
import { useFilter } from '../../contexts/FilterContext';

const getCategories = () => {
	const categories = [];
	window.NewfoldSolutions.categories.map( ( cat ) => {
		const { slug: id, name: label, priority, count } = cat;
		categories.push( { id, label, priority, count } );
	} );

	categories.sort( ( a, b ) => ( a.priority > b.priority ? -1 : 1 ) );

	const staticCategories = [
		{
			id: 'popular',
			label: __( 'Most Popular', 'wp-module-solutions' ),
			icon: FireIcon,
		},
		{
			id: 'premium',
			label: __( 'Premium Tools', 'wp-module-solutions' ),
			icon: StarIcon,
		},
	];

	return [
		{
			id: 'all',
			label: __( 'All', 'wp-module-solutions' ),
		},
		...categories,
		...staticCategories,
	];
};

const SearchField = () => {
	const { search, updateSearch } = useFilter();
	return (
		<div className="nfd-solutions-search nfd-flex nfd-flex-col nfd-gap-4 nfd-mb-8">
			<Title as="h4">{ __( 'Search', 'wp-module-solutions' ) }</Title>
			<TextInput
				value={ search }
				onChange={ ( e ) => {
					updateSearch( e.target.value );
				} }
			/>
		</div>
	);
};

const SideNav = () => {
	const categories = getCategories();
	const { category, setCategory } = useFilter();

	return (
		<aside className={ 'nfd-solutions-sidebar' }>
			<SidebarNavigation activePath={ category }>
				<SidebarNavigation.Sidebar className="nfd-min-w-60">
					<SearchField />
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
						{ categories.map( ( cat ) => (
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

const MobileNav = () => {
	const categories = getCategories();
	const { category, setCategory } = useFilter();

	return (
		<div>
			<SearchField />
			<div className="nfd-solutions-mobile-categories nfd-flex nfd-flex-col nfd-gap-4 nfd-mb-8">
				<Title as="h4">
					{ __( 'Categories', 'wp-module-solutions' ) }
				</Title>
				<Select
					onChange={ setCategory }
					value={ category || 'all' }
					id={ 'nfd-solutions-category-selector' }
					className={ 'nfd-solutions-category-selector' }
					selectedLabel={
						categories.find(
							( cat ) => cat.id === ( category || 'all' )
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
		</div>
	);
};

export const Sidebar = () => {
	const isLargeViewport = useViewportMatch( 'medium' );

	return <>{ isLargeViewport ? <SideNav /> : <MobileNav /> }</>;
};
