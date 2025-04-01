import { getPlugins } from '../../utils';
import { Plugin } from '../plugin';
import { __ } from '@wordpress/i18n';
import { Section } from '../../section';

export const Commerce = ( { plan } ) => {
	const plugins = getPlugins( { sortByPlan: true } );
	const title = __(
		'Premium tools available in your Commerce Solution',
		'wp-module-solutions'
	);
	return (
		<>
			<Section title={ title }>
				{ __(
					'Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.',
					'wp-module-solutions'
				) }
			</Section>
			{ !! plugins.length && (
				<div className="nfd-plugins-card-list">
					<div id="the-list">
						{ plugins.map( ( plugin ) => (
							<Plugin
								name={ plugin?.name }
								category={ plugin.category }
								description={ plugin.description }
								icon={ plugin?.image?.primaryImage }
								premium={ plugin?.premium }
								displayAsPremiun={ true }
								popular={ plugin?.popular }
								key={ plugin?.name }
								isActive={ plugin?.isActive }
								plsProvider={ plugin?.plsProviderName }
								plsSlug={ plugin?.plsSlug }
								ctbId={ plugin?.ctbId }
								ctbHref={ plugin?.ctbHref }
								ctaUrl={ plugin?.cta?.url }
								ctaLabel={ plugin?.cta?.text }
							/>
						) ) }
					</div>
				</div>
			) }
		</>
	);
};
