import { Title } from '@newfold/ui-component-library';
import classNames from 'classnames';
import { Badge } from "../../../../components/badge";
import {__} from "@wordpress/i18n";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const PremiumBadge = () => (
    <Badge
        label={ __( 'PREMIUM', 'wp-module-solutions' ) }
        rounded={ true }
        className={ 'nfd-mb-2 nfd-solutions-badge--premium' }
    />
);

export const Plugin = ({
        name,
        description = '',
        premium = false,
        displayAsPremiun = false,
        href = '',
        icon = null,
        plsSlug,
        plsProvider,
        isActive,
        ctbId,
        ctbHref,
}) => {

    let classes = [
        'plugin-card',
        'nfd-plugin-card',
        'plugin-card-' + plsSlug,
        {
            'nfd-plugin-card-premium' : premium && displayAsPremiun,
            'nfd-plugin-card--icon'    : icon,
        },
    ]

    let buttonClass = [
        'button',
        {
            'nfd-plugin-card-premium-button' : premium && displayAsPremiun
        }
    ]

    return (
        <div className={ classNames( classes ) } >
            <div className="plugin-card-top">
                <div className="name column-name">
                    <Title as="h3">
                        { !! premium && !! displayAsPremiun && (
                            <div className="nfd-tools-card-badges nfd-flex nfd-gap-1">
                                { !! premium && <PremiumBadge/>}
                            </div>
                        )}
                        <div className="nfd-tools-plugin-card-title">
                            <span>{name}</span>
                            {!! premium && !! displayAsPremiun &&  (
                                <span className="nfd-tools-plugin-card-premium-icon">
                                   <LockClosedIcon/>
                                </span>
                            )}
                        </div>
                        {!!icon && (
                            <div className="nfd-plugin-card-thumbnail">
                                <img
                                    alt={name}
                                    className="plugin-icon"
                                    src={icon}
                                />
                            </div>
                        )}
                    </Title>
                </div>
                <div className="action-links">
                        <ul className="plugin-action-buttons">
                            <li className="">
                                <a
                                    className={ classNames( buttonClass ) }
                                    href={ctbId ? ctbHref : href}
                                    data-nfd-installer-pls-slug={
                                        !isActive && !ctbId ? plsSlug : null
                                    }
                                    data-nfd-installer-pls-provider= {
                                        !isActive && !ctbId ? plsProvider : null
                                    }
                                    data-nfd-installer-plugin-activate={isActive && !ctbId}
                                    data-nfd-installer-plugin-name={
                                        !isActive && !ctbId ? name : null
                                    }
                                    data-ctb-id={ctbId}
                                >
                                    { !! premium && !! displayAsPremiun
                                        ? __('Get it', 'wp-module-solutions')
                                        : __('Install now', 'wp-module-solutions')}
                                </a>
                            </li>
                        </ul>
                </div>
                <div className="desc column-description">
                    {!!description && <p>{ description }</p>}
                </div>
            </div>
            <div className="plugin-card-bottom">
                <p>This is the bottom</p>
            </div>
        </div>
    );
};
