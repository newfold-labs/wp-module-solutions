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
	const classes = [
		'plugin-card',
		'nfd-plugin-card',
		'plugin-card-' + cleanForSlug( name ),
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

    const [ ctaHref, setCtaRef] = useState(! isBlock
        ? ctbId
            ? ctbHref
            : renderCTAUrl( ctaUrl )
        : '#null');
    //Add UTM parameters to the link if the function is available
    useEffect(() => {
        const interval = setTimeout(() => {
            if (
                window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof Function
            ) {
                const addLearnMoreParamsLink = window.NewfoldRuntime.linkTracker.addUtmParams(ctaHref);
                setCtaRef(addLearnMoreParamsLink);
            }
        }, 200);

        return () => clearTimeout(interval);
    }, []);

    return (
		<div className={ classNames( classes ) }>
			<div className="plugin-card-top">
				<div className="name column-name">
					<Title as="h2">
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
								href={ ctaHref }
								target={
									! isBlock
										? ctbId
											? '_blank'
											: null
										: null
								}
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
