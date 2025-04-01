import { Title } from '@newfold/ui-component-library';

export const Section = ({ title, children }) => {
    return (
        <div className="nfd-app-section nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8">
            { title && <Title>
                { title }
            </Title>}
            { children }
        </div>
    );
};
