import './style.scss';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { Button, Title } from '@newfold/ui-component-library';
import { useState, useEffect } from 'react';

/**
 * Badge component
 *
 * @param title.className
 * @param title                {string}
 * @param secondaryTitle       {string}
 * @param children             {JSX.Element | null}
 * @param className            {string}
 * @param props                {object}
 * @param title.children
 * @param title.title
 * @param title.secondaryTitle
 */
export const UpgradeBanner = ( {
	className = '',
	children,
	title,
	secondaryTitle,
	...props
} ) => {
	const classes = [ className, 'nfd-solutions-upgrade-banner' ];
    const [link, setLink] = useState('https://www.bluehost.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY');
    //Add UTM parameters to the link if the function is available
    useEffect(() => {
        const interval = setTimeout(() => {
            if (
                window.NewfoldRuntime?.linkTracker?.addUtmParams instanceof Function
            ) {
                const addParamsLink = window.NewfoldRuntime.linkTracker.addUtmParams(link);
                setLink(addParamsLink);
            }
        }, 200);

        return () => clearTimeout(interval);
    }, []);
	return (
		<>
			<span className="nfd-solutions-upgrade-banner__overlay" />
			<div className={ classNames( classes ) } { ...props }>
				<span className="nfd-solutions-upgrade-banner__lock-icon">
					<LockClosedIcon />
				</span>
				<Title as="h2" className="nfd-solutions-upgrade-banner__title">
					{ title ||
						__(
							'Upgrade to unlock all features',
							'wp-module-solutions'
						) }
				</Title>
				<Title
					as="h4"
					className="nfd-solutions-upgrade-banner__title--secondary"
				>
					{ secondaryTitle ||
						__(
							'Add-Ons to build any kind of site, store or blog',
							'wp-module-solutions'
						) }
				</Title>
				<span className="nfd-solutions-upgrade-banner__content">
					{ children }
				</span>
				<Button
					as="a"
					className="nfd-solutions-upgrade-banner__button"
					data-ctb-id="5dc83bdd-9274-4557-a6d7-0b2adbc3919f"
					href={link}
					rel="noreferrer"
					size="large"
					target="_blank"
				>
					{ __( 'Discover Now', 'wp-module-solutions' ) }
				</Button>
			</div>
		</>
	);
};
