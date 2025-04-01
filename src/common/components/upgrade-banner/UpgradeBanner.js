import './style.scss';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { Button, Title } from '@newfold/ui-component-library';

/**
 * Badge component
 *
 * @param title           {string}
 * @param secondaryTitle  {string}
 * @param children        {JSX.Element | null}
 * @param className       {string}
 * @param props           {object}
 */
export const UpgradeBanner = ( { className = '', children, title, secondaryTitle, ...props } ) => {
	const classes = [ className, 'nfd-solutions-upgrade-banner' ];

	return (
		<>
			<span className="nfd-solutions-upgrade-banner__overlay"/>
			<div className={ classNames( classes ) } { ...props }>
				<span className="nfd-solutions-upgrade-banner__lock-icon">
					<LockClosedIcon/>
				</span>
				<Title as="h2" className="nfd-solutions-upgrade-banner__title">
					{
						title ||
						__(
							'Upgrade to unlock all features',
							'wp-module-solutions'
						)
					}
				</Title>
				<Title
					as="h4"
					className="nfd-solutions-upgrade-banner__title--secondary"
				>
					{
						secondaryTitle ||
						__(
							'Advanced Solutions to build any kind of site, store or blog',
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
					href="https://www.bluehost.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY"
					size="large"
				>
					{ __( 'Discover Now', 'wp-module-solutions' ) }
				</Button>
			</div>
		</>
	);
};
