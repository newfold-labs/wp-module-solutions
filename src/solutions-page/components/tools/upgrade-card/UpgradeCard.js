import { Button, Card, Title } from '@newfold/ui-component-library';
import { BoltIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { getSolution } from 'common/utils';

export const UpgradeCard = () => {
	const commercePlan = getSolution( 'WP_SOLUTION_COMMERCE' );
	const classes = [
		'nfd-upgrade-card',
		'nfd-solutions-tool-card',
		'nfd-bg-white',
		'nfd-justify-end',
		'nfd-solutions-tool-card--premium',
		'nfd-solutions-tool-card--with-featured-icon',
	];

	return (
		<Card className={ classNames( classes ) }>
			<Card.Content>
				<div className="nfd-upgrade-card__badge nfd-flex nfd-items-center nfd-gap-2 nfd-text-[--primary-color]">
					<span
						className={
							'nfd-w-[24px] nfd-bg-[--primary-color] nfd-rounded-lg nfd-p-1'
						}
					>
						<BoltIcon className={ 'nfd-text-white' } />
					</span>
					{ __( 'Upgrade to Save', 'wp-module-solutions' ) }
				</div>
				<Title as="h2" className="nfd-font-bold nfd-pt-3 nfd-pb-4">
					{ __(
						'The #1 Bundle of Commerce Tools',
						'wp-module-solutions'
					) }
				</Title>
				<p className="nfd-flex nfd-flex-col nfd-gap-2">
					<span>
						{ __(
							'Add-Ons designed to help shop owners to boost their online sales with a massive bundle of premium tools',
							'wp-module-solutions'
						) }
					</span>
					<span className="nfd-flex nfd-flex-col">
						<span
							className={
								'nfd-font-bold nfd-text-[--primary-color]'
							}
						>
							{ __(
								'Some features included:',
								'wp-module-solutions'
							) }
						</span>
						{ __(
							'Boost Reviews, Booking & Appointments, Social Login, Product filters, etc.',
							'wp-module-solutions'
						) }
						<span className={ 'nfd-font-bold nfd-underline' }>
							{ __(
								'Bundle of 30 features for a value of $3,500',
								'wp-module-solutions'
							) }
						</span>
					</span>
				</p>
			</Card.Content>
			<Card.Footer
				className={ 'nfd-flex nfd-justify-between nfd-items-center' }
			>
				<div>
					<span className="nfd-font-bold nfd-text-2xl">
						{ commercePlan.price }
					</span>
					{ __( '/month', 'wp-module-solutions' ) }
				</div>
				<Button
					as={ 'a' }
					href="https://www.bluehost.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY"
					data-ctb-id="5dc83bdd-9274-4557-a6d7-0b2adbc3919f"
					rel="noreferrer"
					target="_blank"
				>
					{ __( 'Discover', 'wp-module-solutions' ) }
				</Button>
			</Card.Footer>
		</Card>
	);
};
