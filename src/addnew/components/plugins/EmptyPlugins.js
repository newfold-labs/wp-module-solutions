import { __ } from '@wordpress/i18n';
import { Title } from "@newfold/ui-component-library";

export const EmptyPlugins = () => {
    return (
        <div className="ndf-solution-empty">
            <Title as="h2">
                { __( 'No matching tools', 'wp-module-solutions' ) }
            </Title>
        </div>
    );
};
