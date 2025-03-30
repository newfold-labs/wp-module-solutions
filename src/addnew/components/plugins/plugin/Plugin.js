import { Title } from '@newfold/ui-component-library';
import classNames from 'classnames';
import { Card } from "@newfold/ui-component-library";
import { Badge } from "../../../../components/badge";
import {__} from "@wordpress/i18n";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Button } from "@newfold/ui-component-library";

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
        popular = false,
        href = '',
        icon = null,
        plsSlug,
        plsProvider,
        isActive,
        ctbId,
        ctbHref,
}) => {

    let classes = [
        'nfd-tools-card-plugin',
        'nfd-tools-card-plugin-' + plsSlug,
        {
            'nfd-tools-card-plugin--premium' : premium,
            'nfd-tools-card-plugin--icon'    : icon,
            'ndf-tools-card-plugin--popular' : popular,
        },
        'ndf-flex',
        'nfd-width-500'
    ]

    return (
        <div className={ classNames( classes ) } >
            <Card>
                <Card.Content className="nfd-flex ndf-tools-plugin-content-section">
                    { !!icon && (
                        <img
                            alt={ name }
                            className="nfd-tools-plugin-card-icon"
                            src={ icon }
                        />
                    ) }
                    <div className="ndf-tools-plugin-content-title">
                        {  !! premium  && (
                            <div className="nfd-tools-card-badges nfd-flex nfd-gap-1">
                                { premium && <PremiumBadge /> }
                            </div>
                        ) }
                        <div className="nfd-tools-plugin-card-title nfd-flex">
                            <Title as={ 'h4' }>
                                { name }
                            </Title>
                            { !! premium && (
                                    <span className="nfd-tools-plugin-card-premium-icon">
                                       <LockClosedIcon />
                                    </span>
                            )}
                        </div>
                        <p className="nfd-tools-plugin-card-description">
                            { description }
                        </p>

                    </div>
                    <div className="ndf-tools-plugin-card-button">
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
                            { premium
                                ? __( 'Get it', 'wp-module-solutions' )
                                : __( 'Install now', 'wp-module-solutions' ) }
                        </Button>
                    </div>
                </Card.Content>
                <Card.Footer>
                    This is Card footer!
                </Card.Footer>
            </Card>
        </div>
    );
};
