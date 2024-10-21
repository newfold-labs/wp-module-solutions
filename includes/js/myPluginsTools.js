class MyPluginTools {

    constructor() {
    window.addEventListener("DOMContentLoaded", () => {
    fetch(
        nfdplugin.restApiUrl +
          '/newfold-solutions/v1/entitlements',
        {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': nfdplugin.restApiNonce,
          },
        }
      )
        .then((response) => response.json()).then((response) => {
           
            const pluginsData = response?.entitlements?.filter(data => data?.type === 'plugin' );
            const installedPlugins = Object.keys(plugin_details?.installed_plugins)
            const pluginWithStatus = pluginsData.map(val => ({
              ...val,
              isInstalled: installedPlugins?.includes( val.basename ),
              isActive: Object.values( plugin_details?.active_plugins ).find( ( plugin ) => plugin === val.basename ),
              nonce: plugin_details?.nonce
            }))
            const sortedPluginNames = pluginWithStatus.sort( ( a, b ) => a.name.localeCompare( b.name ) )
            this.setUpContainer( sortedPluginNames );
        })
    
    })
        
    }

    activate_plugin ( plugin_path, href ){
      fetch(
        nfdplugin.restApiUrl +
          '/newfold-solutions/v1/activate_plugin',
        {
          credentials: 'same-origin',
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': nfdplugin.restApiNonce,
          },
          body: JSON.stringify({
            plugin: plugin_path
          })
        }
      ).then((response) => response.json() ).then((response) => {
        if( response?.message ){
          window.location.href = href;
        }
      })
       
    }

    renderCTAUrl( url ) {
      if ( ! window.NewfoldRuntime || ! window.NewfoldRuntime.siteUrl ) {
        // fallback to site relative url if no base_url is found
        return url.replace( '{siteUrl}', '' );
      }
      return url.replace( '{siteUrl}', window.NewfoldRuntime.siteUrl );
    }

    getElementByStatus( isActive, isInstalled, pluginData ) {
      if( isActive && isInstalled ){ // active and installed
        return `<a 
          title="Manage"
          href="${this.renderCTAUrl(pluginData?.cta?.url)}"
          class="nfd-solutions-availble-list-item-button"
        >${pluginData?.cta?.text}</a>`;
      } else if ( isInstalled ){ // already installed
        return `<button
          title="Activate Plugin"
          data-plugin="${pluginData?.basename}"
          href="${this.renderCTAUrl(pluginData?.cta?.url)}"
          class="nfd-solutions-availble-list-item-button nfd-activate-btn"
        >${pluginData?.cta?.text}</button>`;
      }

      if ( pluginData?.plsProviderName && pluginData?.plsSlug ){ // premium plugin with pls
        return `<button
          title="Install Premium Plugin"
          class="nfd-solutions-availble-list-item-button"
          data-nfd-installer-plugin-activate="${true}"
          data-nfd-installer-plugin-slug="${pluginData?.plsSlug}"
          data-nfd-installer-plugin-provider="${pluginData?.plsProviderName}"
          data-nfd-installer-plugin-name="${pluginData?.name}"
          data-nfd-installer-plugin-url="${this.renderCTAUrl(pluginData?.cta?.url)}"
        >${pluginData?.cta?.text}</button>`;
      } else if ( pluginData?.download ) { // free plugin
        return `<button
          title="Install Plugin"
          class="nfd-solutions-availble-list-item-button"
          data-nfd-installer-plugin-activate="${true}"
          data-nfd-installer-plugin-name="${pluginData?.name}"
          data-nfd-installer-download-url="${pluginData?.download}"
          data-nfd-installer-plugin-url="${this.renderCTAUrl(pluginData?.cta?.url)}"
        >${pluginData?.cta?.text}</button>`;
      } else { // fallback
        return `<a
          title="Learn More"
          href="${pluginData?.url}"
          class="nfd-solutions-availble-list-item-button"
        >${pluginData?.cta?.text}</a>`;
      }
    }

    buildPluginsBlock( pluginData ) {
        return `<div class="nfd-solutions-availble-list-item">
                    <div><img src=${pluginData?.image?.primaryImage} width="128px" height="128px" /></div>
                    <div class="details">
                        <h3 class="nfd-solutions-availble-list-item-title">${pluginData?.name}</h3>
                        <div>
                       ${this.getElementByStatus( pluginData?.isActive, pluginData?.isInstalled, pluginData )}
                        </div>
                        <p>${pluginData?.description}</p>
                    </div>
                </div>`;
    }
    
    setUpContainer( entitlements ) {
        const wpBody = document.getElementById("wpbody-content");

        let myPlugins = document.createElement("div");
        myPlugins.classList.add("nfd-solutions-availble-list")
        entitlements?.forEach( ( data ) => ( myPlugins.innerHTML += this.buildPluginsBlock(data) ) );
         
        wpBody.appendChild(myPlugins);
        this.bindActivateButtons();
    }

    bindActivateButtons() {
     
      const activateButtons = document.querySelectorAll(".nfd-activate-btn");
      activateButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
              const pluginPath = event.target.getAttribute("data-plugin");
              const href =  event.target.getAttribute("href");
              this.activate_plugin(pluginPath, href); 
          });
      });
  }
}


const pluginList = new MyPluginTools();
