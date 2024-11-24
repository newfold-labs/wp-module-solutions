class MyPluginTools {
	constructor() {
		window.addEventListener( 'DOMContentLoaded', () => {
			fetch(
				nfdplugin.restApiUrl + '/newfold-solutions/v1/entitlements',
				{
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'X-WP-Nonce': nfdplugin.restApiNonce,
					},
				}
			)
				.then( ( response ) => response.json() )
				.then( ( response ) => {
					const pluginsData = response?.entitlements?.filter(
						( data ) => data?.type === 'plugin'
					);
					const installedPlugins = Object.keys(
						nfdPluginDetails?.installed
					);
					const pluginWithStatus = pluginsData.map( ( val ) => ( {
						...val,
						isInstalled: installedPlugins?.includes( val.basename ),
						isActive: Object.values(
							nfdPluginDetails?.active
						).find( ( plugin ) => plugin === val.basename ),
					} ) );
					const sortedPluginNames = pluginWithStatus.sort( ( a, b ) =>
						a.name.localeCompare( b.name )
					);
					this.setUpContainer( sortedPluginNames );
				} );
		} );
	}

	activate_plugin( plugin_path, href ) {
		fetch( nfdplugin.restApiUrl + '/newfold-solutions/v1/activate_plugin', {
			credentials: 'same-origin',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': nfdplugin.restApiNonce,
			},
			body: JSON.stringify( {
				plugin: plugin_path,
			} ),
		} )
			.then( ( response ) => response.json() )
			.then( ( response ) => {
				if ( response?.message ) {
					window.location.href = href;
				}
			} );
	}

	renderNameAsClass( name ) {
		return name
			.replaceAll( ' & ', '-' )
			.replaceAll( ' ', '-' )
			.replaceAll( '&', '-' )
			.toLowerCase();
	}

	renderCTAUrl( url ) {
		if ( ! window.NewfoldRuntime || ! window.NewfoldRuntime.siteUrl ) {
			// fallback to site relative url if no base_url is found
			return url.replace( '{siteUrl}', '' );
		}
		return url.replace( '{siteUrl}', window.NewfoldRuntime.siteUrl );
	}

	getElementByStatus( isActive, isInstalled, pluginData ) {
		// active and installed - no installer attributes needed
		if ( isActive && isInstalled ) {
			return `<a 
          title="Manage Plugin"
          class="nfd-solutions-availble-list-item-button nfd-solutions-${ this.renderNameAsClass(
				pluginData?.name
			) }-button"
          href="${ this.renderCTAUrl( pluginData?.cta?.url ) }"
        >${ pluginData?.cta?.text }</a>`;
		}

		// premium plugin - has pls values
		if ( pluginData?.plsProviderName && pluginData?.plsSlug ) {
			return `<button
          title="${ isInstalled ? 'Activate' : 'Install' } Premium Plugin"
          class="nfd-solutions-availble-list-item-button nfd-solutions-${ this.renderNameAsClass(
				pluginData?.name
			) }-button"
          href="${ this.renderCTAUrl( pluginData?.cta?.url ) }"
          data-nfd-installer-plugin-activate="${ true }"
          data-nfd-installer-plugin-name="${ pluginData?.name }"
          data-nfd-installer-plugin-url="${ this.renderCTAUrl(
				pluginData?.cta?.url
			) }"
          data-nfd-installer-pls-provider="${ pluginData?.plsProviderName }"
          data-nfd-installer-pls-slug="${ pluginData?.plsSlug }"
        >${ pluginData?.cta?.text }</button>`;
		}
		// free plugin - has download url value
		if ( pluginData?.download ) {
			return `<button
          title="${ isInstalled ? 'Activate' : 'Install' } Plugin"
          class="nfd-solutions-availble-list-item-button nfd-solutions-${ this.renderNameAsClass(
				pluginData?.name
			) }-button"
          href="${ this.renderCTAUrl( pluginData?.cta?.url ) }"
          data-nfd-installer-download-url="${ pluginData?.download }"
          data-nfd-installer-plugin-activate="${ true }"
          data-nfd-installer-plugin-name="${ pluginData?.name }"
          data-nfd-installer-plugin-url="${ this.renderCTAUrl(
				pluginData?.cta?.url
			) }"
        >${ pluginData?.cta?.text }</button>`;
		}
		// fallback
		return `<a
          title="Learn More"
          class="nfd-solutions-availble-list-item-button nfd-solutions-${ this.renderNameAsClass(
				pluginData?.name
			) }-button"
          href="${ pluginData?.url }"
        >${ pluginData?.cta?.text }</a>`;
	}

	buildPluginsBlock( pluginData ) {
		return `<div class="nfd-solutions-availble-list-item nfd-solutions-plugin-${ this.renderNameAsClass(
			pluginData?.name
		) }">
                    <div><img src=${
						pluginData?.image?.primaryImage
					} width="128px" height="128px" /></div>
                    <div class="details">
                        <h3 class="nfd-solutions-availble-list-item-title">${
							pluginData?.name
						}</h3>
                        <div>
                       ${ this.getElementByStatus(
							pluginData?.isActive,
							pluginData?.isInstalled,
							pluginData
						) }
                        </div>
                        <p>${ pluginData?.description }</p>
                    </div>
                </div>`;
	}

	setUpContainer( entitlements ) {
		const wpBody = document.getElementById( 'wpbody-content' );

		const myPlugins = document.createElement( 'div' );
		myPlugins.classList.add( 'nfd-solutions-availble-list' );
		entitlements?.forEach(
			( data ) =>
				( myPlugins.innerHTML += this.buildPluginsBlock( data ) )
		);

		wpBody.appendChild( myPlugins );
	}

	bindActivateButtons() {
		const activateButtons =
			document.querySelectorAll( '.nfd-activate-btn' );
		activateButtons.forEach( ( button ) => {
			button.addEventListener( 'click', ( event ) => {
				const pluginPath = event.target.getAttribute( 'data-plugin' );
				const href = event.target.getAttribute( 'href' );
				this.activate_plugin( pluginPath, href );
			} );
		} );
	}
}

const pluginList = new MyPluginTools();
