import './style.scss';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { Button, Title } from '@newfold/ui-component-library';

/**
 * Badge component
 *
 * @param label      {string}
 * @param icon       {JSX.Element | null}
 * @param rounded    {boolean}
 * @param className  {string}
 * @param props      {object}
 */
export const UpgradeBanner = ( {
								   className = '',
								   ...props
							   } ) => {
	const classes = [
		className,
		'nfd-solutions-upgrade-banner',
	];

	return (
		<div className={ classNames( classes ) } { ...props }>
			<span className="nfd-solutions-upgrade-banner__lock-icon">
				<LockClosedIcon/>
			</span>
			<Title as="h2" className="nfd-solutions-upgrade-banner__title">
				{ __( 'Upgrade to unlock all features', 'wp-module-solutions' ) }
			</Title>
			<Title as="h4" className="nfd-solutions-upgrade-banner__title--secondary">
				{ __( 'Advanced Solutions to build any kind of site, store or blog', 'wp-module-solutions' ) }
			</Title>
			<span className="nfd-solutions-upgrade-banner__description">
				{ __( 'Start with a plan that fits your goals and unlock up to $3,500 in premium Bluehost and Yoast plugins.', 'wp-module-solutions' ) }
			</span>
			<Button size="large" className="nfd-solutions-upgrade-banner__button">
				{ __( 'Discover Now', 'wp-module-solutions' ) }
			</Button>
		</div>
	);
};
