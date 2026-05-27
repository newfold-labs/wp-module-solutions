import { Title, Button } from '@newfold/ui-component-library';
import { cleanForSlug } from '@wordpress/url';
import classNames from 'classnames';
import { Badge } from '../../../../common/components/badge';
import { renderCTAUrl } from '../../../../common/utils';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import {useEffect, useState} from "react";

const PremiumBadge = () => (
	<Badge
		label={ __( 'Premium', 'wp-module-solutions' ) }
		rounded={ true }
		className={ 'nfd-mb-2 nfd-solutions-badge--premium' }
	/>
);

/**
 * Initial CTA `href` before link-tracker UTM rewrites.
 *
 * - CTB cards use `ctbHref` (purchase flow; `data-ctb-id` handles the click).
 * - Blocked premium cards use `#null` (no navigation; upgrade is via the banner).
 * - Installable cards use the rendered plugin CTA URL.
 *
 * @param {{ ctbId?: string, ctbHref?: string, isBlock: boolean, ctaUrl?: string }} args
 * @return {string|undefined}
 */
function resolveInitialCtaHref( { ctbId, ctbHref, isBlock, ctaUrl } ) {
	if ( ctbId ) {
		return ctbHref;
	}
	if ( isBlock ) {
		return '#null';
	}
	return renderCTAUrl( ctaUrl );
}

/**
 * `target` for the plugin card CTA anchor.
 *
 * Opens CTB purchase links in a new tab; blocked and installer CTAs omit `target`.
 *
 * @param {string|undefined} ctbId
 * @param {boolean} isBlock
 * @return {'_blank'|null}
 */
function resolveCtaTarget( ctbId, isBlock ) {
	if ( isBlock ) {
		return null;
	}
	if ( ctbId ) {
		return '_blank';
	}
	return null;
}

export const Plugin = ( {
	name,
	description = '',
	premium = false,
	displayAsPremiun = false,
	icon = null,
	plsSlug,
	plsProvider,
	isActive,
	isBlock = false,
	ctbId,
	ctbHref,
	ctaUrl,
	ctaLabel,
	download,
	basename,
	dependency,
} ) => {
	const pluginSlug = cleanForSlug( name );
	const classes = [
		'plugin-card',
		'nfd-plugin-card',
		'plugin-card-' + pluginSlug,
		{
			'nfd-plugin-card-premium': premium && displayAsPremiun,
			'nfd-plugin-card--icon': icon,
		},
	];

	const buttonClass = [
		'button',
		{
			'nfd-plugin-card-premium-button': premium && displayAsPremiun,
		},
	];

	const initialCtaHref = resolveInitialCtaHref( {
		ctbId,
		ctbHref,
		isBlock,
		ctaUrl,
	} );
	const ctaTarget = resolveCtaTarget( ctbId, isBlock );

	const [ resolvedCtaHref, setResolvedCtaHref ] = useState( initialCtaHref );

	// Add UTM parameters when the href is a real URL (skip block placeholders).
	useEffect( () => {
		if ( ! initialCtaHref || '#null' === initialCtaHref || '#' === initialCtaHref ) {
			return undefined;
		}

		const timer = window.setTimeout( () => {
			if (
				window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof
				Function
			) {
				setResolvedCtaHref(
					window.NewfoldRuntime.linkTracker.addUtmParams(
						initialCtaHref
					)
				);
			}
		}, 200 );

		return () => window.clearTimeout( timer );
	}, [ initialCtaHref ] );

    return (
		<div
			className={ classNames( classes ) }
			data-testid={ `nfd-solutions-plugin-card-${ pluginSlug }` }
		>
			<div className="plugin-card-top">
				<div className="name column-name">
					<Title
						as="h2"
						data-testid={ `nfd-solutions-plugin-card-${ pluginSlug }-title` }
					>
						{ !! premium && !! displayAsPremiun && (
							<div className="nfd-tools-card-badges nfd-flex nfd-gap-1">
								{ !! premium && <PremiumBadge /> }
							</div>
						) }
						<div className="nfd-tools-plugin-card-title">
							<span>{ name }</span>
							{ !! premium && !! displayAsPremiun && (
								<span className="nfd-tools-plugin-card-premium-icon">
									<LockClosedIcon />
								</span>
							) }
						</div>
						{ !! icon && (
							<div className="nfd-plugin-card-thumbnail plugin-icon">
								<img
									alt={ name }
									className="nfd-plugin-icon"
									src={ icon }
								/>
							</div>
						) }
					</Title>
				</div>
				<div className="action-links">
					<ul className="plugin-action-buttons">
						<li>
							<a
								className={ classNames( buttonClass ) }
								data-testid={ `nfd-solutions-plugin-card-${ pluginSlug }-cta` }
								data-ctb-id={ ctbId }
								data-is-active={ isActive ? true : null }
								data-nfd-installer-download-url={
									! isBlock && ! isActive && ! ctbId
										? download
										: null
								}
								data-nfd-installer-plugin-basename={
									! isBlock && ! isActive && ! ctbId
										? basename
										: null
								}
								data-nfd-installer-plugin-name={
									! isBlock && ! isActive && ! ctbId
										? name
										: null
								}
								data-nfd-installer-pls-provider={
									! isBlock && ! isActive && ! ctbId
										? plsProvider
										: null
								}
								data-nfd-installer-pls-slug={
									! isBlock && ! isActive && ! ctbId
										? plsSlug
										: null
								}
								data-nfd-installer-plugin-dependency={
									! isBlock && ! isActive && ! ctbId
										? dependency
										: null
								}
								href={ resolvedCtaHref }
								target={ ctaTarget }
							>
								{ !! premium && !! displayAsPremiun
									? __( 'Get it', 'wp-module-solutions' )
									: ctaLabel }{ ' ' }
							</a>
						</li>
					</ul>
				</div>
				<div className="desc column-description nfd-tools-plugin-card-description">
					{ !! description && <p>{ description }</p> }
				</div>
			</div>
		</div>
	);
};
