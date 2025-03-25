import { __ } from '@wordpress/i18n';
import { Card, Title, Button } from '@newfold/ui-component-library';
import { Badge } from './../../badge';
import classNames from 'classnames';

import { FireIcon } from '@heroicons/react/20/solid';

const PopularBadge = () => <Badge label={ __( 'Popular', 'wp-module-solutions' ) } icon={ FireIcon } rounded={ true } className={ 'nfd-mb-2 nfd-solutions-badge--popular' }/>
const PremiumBadge = () => <Badge label={ __( 'Premium', 'wp-module-solutions' ) } rounded={ true } className={ 'nfd-mb-2 nfd-solutions-badge--premium' }/>

export const Tool = ( { name, description = '', premium = false, popular = false, wide = false, href = '', icon: Icon = null } ) => {
	const classes = [
		'nfd-solutions-tool-card',
		'nfd-bg-white',
		{
			'nfd-solutions-tool-card--wide': wide,
			'nfd-solutions-tool-card--premium': premium,
		}
	];

	const Header = () => <>
		{
			Icon
			&&
			<Card.Header className="nfd-bg-inherit nfd-bg-transparent nfd-aspect-3/1 nfd-h-auto">
				<Icon/>
			</Card.Header>
		}</>;
	const Content = () => <Card.Content>
		{
			(premium || popular) &&
			<div className="nfd-solutions-card-badges nfd-flex nfd-gap-1">
				{ premium && <PremiumBadge/> }
				{ popular && <PopularBadge/> }
			</div>
		}
		<Title as={ 'h4' }>
			{ name }
		</Title>
		{ description }
	</Card.Content>;

	return <Card className={ classNames( classes ) }>
		{
			wide &&
			<div className="nfd-solutions-tool-card--wide-body nfd-flex nfd-gap-4 nfd-items-baseline">
				<Content/>
				<Header/>
			</div>
		}
		{
			! wide &&
			<>
				<Header/>
				<Content/>
			</>
		}
		<Card.Footer>
			<Button as={ 'a' } href={ href }>{ premium ? __( 'Get it', 'wp-module-solutions' ) : __( 'Manage', 'wp-module-solutions' ) }</Button>
		</Card.Footer>
	</Card>;
}
