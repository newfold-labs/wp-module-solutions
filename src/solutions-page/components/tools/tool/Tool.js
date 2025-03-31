import { __ } from '@wordpress/i18n';
import { Card, Title, Button } from '@newfold/ui-component-library';
import { Badge } from 'common/components/badge';
import classNames from 'classnames';

import { FireIcon } from '@heroicons/react/20/solid';
import { ReactSVG } from 'react-svg';
import { getActiveSolution } from 'common/utils';

const PopularBadge = () => (
	<Badge
		label={ __( 'Popular', 'wp-module-solutions' ) }
		icon={ FireIcon }
		rounded={ true }
		className={ 'nfd-mb-2 nfd-solutions-badge--popular' }
	/>
);
const PremiumBadge = () => (
	<Badge
		label={ __( 'Premium', 'wp-module-solutions' ) }
		rounded={ true }
		className={ 'nfd-mb-2 nfd-solutions-badge--premium' }
	/>
);

export const Tool = ( {
	name,
	description = '',
	premium = false,
	popular = false,
	wide = false,
	href = '',
	featureIcon = null,
	smallIcon = null,
	plsSlug,
	plsProvider,
	isActive,
	ctbId,
	ctbHref,
} ) => {
	const premiumStyle = premium && !! getActiveSolution();
	const classes = [
		'nfd-solutions-tool-card',
		'nfd-bg-white',
		'nfd-justify-end',
		'nfd-solutions-tool-card-' + plsSlug,
		{
			'nfd-solutions-tool-card--with-featured-icon': featureIcon,
			'nfd-solutions-tool-card--with-small-icon':
				! featureIcon && smallIcon,
			'nfd-solutions-tool-card--wide': wide,
			'nfd-solutions-tool-card--premium': premiumStyle,
		},
	];

	const Header = () => (
		<>
			{ featureIcon && (
				<Card.Header className="nfd-solutions-tool-card__header nfd-bg-inherit nfd-bg-transparent">
					<ReactSVG
						alt={ name }
						className="nfd-solutions-card__feature-icon"
						src={ featureIcon + '?nocache' }
					/>
				</Card.Header>
			) }
		</>
	);
	const Content = () => (
		<Card.Content>
			{ ! featureIcon && !! smallIcon && (
				<img
					alt={ name }
					className="nfd-solutions-card__small-icon"
					src={ smallIcon }
				/>
			) }
			{ ( premiumStyle || popular ) && (
				<div className="nfd-solutions-card-badges nfd-flex nfd-gap-1">
					{ !! premiumStyle && <PremiumBadge /> }
					{ !! popular && <PopularBadge /> }
				</div>
			) }
			<Title as={ 'h4' } className="nfd-solutions-card-title">
				{ name }
			</Title>
			<span className="nfd-solutions-card-description">
				{ description }
			</span>
		</Card.Content>
	);

	return (
		<Card className={ classNames( classes ) }>
			{ wide && (
				<div className="nfd-solutions-tool-card--wide-body nfd-flex nfd-gap-4 nfd-items-end">
					<Content />
					<Header />
				</div>
			) }
			{ ! wide && (
				<>
					<Header />
					<Content />
				</>
			) }
			<Card.Footer
				className={ premiumStyle ? 'nfd-flex nfd-justify-end' : '' }
			>
				<Button
					as={ 'a' }
					href={ ctbId ? ctbHref : href }
					data-nfd-installer-pls-slug={
						! isActive && ! ctbId ? plsSlug : null
					}
					data-nfd-installer-pls-provider={
						! isActive && ! ctbId ? plsProvider : null
					}
					data-nfd-installer-plugin-activate={ isActive && ! ctbId }
					data-nfd-installer-plugin-name={
						! isActive && ! ctbId ? name : null
					}
					data-ctb-id={ ctbId }
				>
					{ premiumStyle
						? __( 'Get it', 'wp-module-solutions' )
						: __( 'Manage', 'wp-module-solutions' ) }
				</Button>
			</Card.Footer>
		</Card>
	);
};
