import { Title } from '@newfold/ui-component-library';
import classNames from 'classnames';
import { Card } from "@newfold/ui-component-library";
import { Badge } from "../../../../components/badge";
import {__} from "@wordpress/i18n";
import {FireIcon, LockClosedIcon } from "@heroicons/react/20/solid";

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
                        { ( premium || popular ) && (
                            <div className="nfd-tools-card-badges nfd-flex nfd-gap-1">
                                { premium && <PremiumBadge /> }
                                { popular && <PopularBadge /> }
                            </div>
                        ) }
                        <Title as={ 'h4' } className="nfd-tools-plugin-card-title">
                            { name }
                        </Title>
                        { premium && (
                                <LockClosedIcon />
                        )}
                        <p className="nfd-tools-plugin-card-description">
                            { description }
                        </p>
                    </div>
                </Card.Content>
                <Card.Footer>
                    This is Card footer!
                </Card.Footer>
            </Card>
        </div>
    );
};
