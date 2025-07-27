import { __ } from '@wordpress/i18n';
import { Card, Title, Button } from '@newfold/ui-component-library';
import { Badge } from 'common/components/badge';
import classNames from 'classnames';
import { cleanForSlug } from '@wordpress/url';
import { FireIcon } from '@heroicons/react/20/solid';
import { ReactSVG } from 'react-svg';
import { getActiveSolution, renderCTAUrl } from 'common/utils';
import { useViewportMatch } from '@wordpress/compose';

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
	featureIcon = null,
	smallIcon = null,
	plsSlug,
	plsProvider,
	isActive,
	ctaUrl,
	ctaLabel,
	ctbId,
	ctbHref,
	download,
	basename,
} ) => {
	const isLargeViewport = useViewportMatch( 'medium' );
	const hasActiveSolution = !! getActiveSolution();
	const premiumStyle = premium && !! getActiveSolution();
	const classes = [
		'nfd-solutions-tool-card',
		'nfd-solutions-tool-card-' + cleanForSlug( name ),
		'nfd-bg-white',
		'nfd-justify-end',
		{
			'nfd-solutions-tool-card--with-featured-icon': featureIcon,
			'nfd-solutions-tool-card--with-small-icon':
				! featureIcon && smallIcon,
			'nfd-solutions-tool-card--wide': wide,
			'nfd-col-span-1': wide && isLargeViewport,
			'nfd-solutions-tool-card--premium': premiumStyle,
			'min-[520px]:nfd-col-span-2 ': wide,
		},
	];

    const ctaHref = ctbId ? ctbHref : renderCTAUrl( ctaUrl );

	const Header = () => (
		<>
			{ featureIcon && (
				<Card.Header className="nfd-solutions-tool-card__header nfd-bg-inherit nfd-bg-transparent">
					<ReactSVG
						alt={ name }
						className="nfd-solutions-card__feature-icon"
						src={ featureIcon }
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
			{ !! hasActiveSolution && (
				<Card.Footer
					className={ premiumStyle ? 'nfd-flex nfd-justify-end' : '' }
				>
					<Button
						as={ 'a' }
						data-ctb-id={ ctbId }
						data-is-active={ isActive ? true : null }
						data-nfd-installer-download-url={
							! isActive && ! ctbId ? download : null
						}
						data-nfd-installer-plugin-activate={
							! ctbId ? 'true' : null
						}
						data-nfd-installer-plugin-basename={
							! isActive && ! ctbId ? basename : null
						}
						data-nfd-installer-plugin-name={
							! isActive && ! ctbId ? name : null
						}
						data-nfd-installer-pls-provider={
							! isActive && ! ctbId ? plsProvider : null
						}
						data-nfd-installer-pls-slug={
							! isActive && ! ctbId ? plsSlug : null
						}
						href={ window.NewfoldRuntime.linkTracker.addUtmParams(ctaHref) }
						target={ ctbId ? '_blank' : null }
					>
						{ premiumStyle
							? __( 'Get it', 'wp-module-solutions' )
							: ctaLabel }
					</Button>
				</Card.Footer>
			) }
		</Card>
	);
};
