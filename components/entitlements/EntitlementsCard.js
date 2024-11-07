import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button, Container } from '@newfold/ui-component-library';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { Section } from './Section';

export function EntitlementsCard( { methods, constants, ...props } ) {
	const { entitlementCategories, renderCTAUrl } = props;
	const [ error, setError ] = methods.useState( null );
	const [ apiResponse, setApiResponse ] = methods.useState( null );
	const [ isLoaded, setIsLoaded ] = methods.useState( false );
	const [ collapse, setCollapse ] = methods.useState( {} );
	const activePluginsArray = [];
	const installedPluginsArray = [];

	const handleDisplay = ( category ) => {
		setCollapse( ( prevState ) => ( {
			...prevState,
			[ category.name ]: ! prevState[ category.name ],
		} ) );
	};

	methods.useEffect( () => {
		methods
			.apiFetch( {
				url: methods.NewfoldRuntime.createApiUrl( '/wp/v2/plugins' ),
			} )
			.then(
				function ( result ) {
					setIsLoaded( true );
					setApiResponse( result );
				},
				function ( e ) {
					setIsLoaded( true );
					setError( e );
				}
			);
	}, [] );

	if ( error ) {
		return (
			<Container>
				<Container.Header title="Error" description={ error.message } />
			</Container>
		);
	} else if ( ! isLoaded ) {
		return (
			<Container>
				<Container.Header title="Loading..." />
			</Container>
		);
	} else if ( apiResponse ) {
		apiResponse.forEach( ( res ) => {
			res.status === 'active'
				? activePluginsArray.push( res.plugin )
				: installedPluginsArray.push( res.plugin );
		} );

		return (
			<Section.Container>
				<Section.Header
					title={ __( 'My Plugins & Tools', 'wp-module-solutions' ) }
					anchor={ {
						title: __( 'Add a New Plugin', 'wp-module-solutions' ),
						className: 'nfd-text-[#196CDF]',
						href: `${ window.NewfoldRuntime.adminUrl }plugin-install.php`,
					} }
				/>
				<Section.Content className="nfd-core-tool-mypluginsntools">
					<>
						{ entitlementCategories.map( ( category, index ) => {
							return (
								<div key={ index }>
									<h2
										className={ classNames(
											'nfd-mt-8',
											'nfd-mb-8',
											'nfd-flex',
											'nfd-flex-row',
											'nfd-cursor-pointer',
											{
												'nfd-border-b nfd-border-[#CBD5E1] nfd-pb-4':
													! collapse[ category.name ],
											}
										) }
										onClick={ () =>
											handleDisplay( category )
										}
									>
										<span className="nfd-text-[#111729] nfd-text-base nfd-font-bold">
											{ category.name }
										</span>
										{ collapse[ category.name ] ? (
											<ChevronUpIcon className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" />
										) : (
											<ChevronDownIcon className="nfd-w-[24px] nfd-h-[24px] nfd-self-center nfd-ml-auto" />
										) }
									</h2>
									{ collapse[ category.name ] &&
										category.entitlements.map(
											( entitlement, i ) => {
												return (
													<div
														className="nfd-flex nfd-flex-row nfd-pb-4 nfd-mb-4 nfd-border-b nfd-border-[#DCE2EA] nfd-gap-4"
														key={ `row-${ i }` }
													>
														<img
															alt=""
															className="entitlement-image"
															src={
																entitlement
																	.image
																	.primaryImage
															}
														/>
														<div
															className="nfd-flex nfd-flex-col"
															key={ `heading_${ i }` }
														>
															<h3 className="nfd-text-[#000000] nfd-font-medium">
																{
																	entitlement.name
																}
															</h3>
															<p className="nfd-text-[#4A5567] nfd-font-normal nfd-mt-2">
																{
																	entitlement.description
																}
															</p>
														</div>
														{ entitlement.type ===
														'plugin' ? (
															activePluginsArray.includes(
																entitlement.basename
															) ? (
																<Button
																	key={ `button_${ i }` }
																	as="a"
																	className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]"
																	href={ renderCTAUrl(
																		entitlement
																			.cta
																			.url
																	) }
																	variant="secondary"
																>
																	{
																		entitlement
																			.cta
																			.text
																	}
																</Button>
															) : entitlement.download ? (
																<Button
																	key={ `button_${ i }` }
																	className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]"
																	variant="secondary"
																	as="button"
																	data-nfd-installer-download-url={
																		entitlement.download
																	}
																	data-nfd-installer-plugin-activate={
																		true
																	}
																	data-nfd-installer-plugin-name={
																		entitlement.name
																	}
																	data-nfd-installer-pls-provider={
																		entitlement.plsProviderName
																	}
																	data-nfd-installer-plugin-url={ renderCTAUrl(
																		entitlement
																			.cta
																			.url
																	) }
																>
																	{
																		entitlement
																			.cta
																			.text
																	}
																</Button>
															) : (
																<Button
																	key={ `button_${ i }` }
																	className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]"
																	variant="secondary"
																	as="button"
																	data-nfd-installer-pls-slug={
																		entitlement.plsSlug
																	}
																	data-nfd-installer-pls-provider={
																		entitlement.plsProviderName
																	}
																	data-nfd-installer-plugin-activate={
																		true
																	}
																	data-nfd-installer-plugin-name={
																		entitlement.name
																	}
																	data-nfd-installer-plugin-url={ renderCTAUrl(
																		entitlement
																			.cta
																			.url
																	) }
																>
																	{
																		entitlement
																			.cta
																			.text
																	}
																</Button>
															)
														) : (
															<Button
																key={ `button_${ i }` }
																as="a"
																className="nfd-button nfd-button--secondary nfd-self-center nfd-ml-auto nfd-font-normal nfd-text-[#000000]"
																href={ renderCTAUrl(
																	entitlement
																		.cta.url
																) }
																variant="secondary"
															>
																{
																	entitlement
																		.cta
																		.text
																}
															</Button>
														) }
													</div>
												);
											}
										) }
								</div>
							);
						} ) }
					</>
				</Section.Content>
			</Section.Container>
		);
	}
}
