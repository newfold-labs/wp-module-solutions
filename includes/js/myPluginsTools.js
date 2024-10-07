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
        .then((response) => response.json()).then(res => {
           
            const pluginsData = res?.data?.entitlements?.filter(data => data?.type === 'plugin' );
            const installedPlugins = Object.keys(pluigin_details?.installed_plugins)
            const pluginWithStatus = pluginsData.map(val => ({
              ...val,
              isInstalled: installedPlugins?.includes( val.basename ),
              isActive: pluigin_details?.active_plugins?.includes( val.basename ),
              nonce: pluigin_details?.nonce
            }))
            this.setUpContainer(pluginWithStatus);
        })
    
    })
        
    }

    getElementByStatus( isActive, isInstalled, pluginData ) {
      if( isActive && isInstalled ){
        return `<a href=${pluginData?.cta?.url} target="_blank" class="nfd-solutions-availble-list-item-button">${pluginData?.cta?.text}</a>`;
      }else if ( isInstalled ){
        return `<a href="plugins.php?action=activate&plugin=${pluginData?.basename}&plugin_status=all&paged=1&s&_wpnonce=${nfdplugin.restApiNonce}" class="nfd-solutions-availble-list-item-button">Activate</a>`;
      }else {
        return `<a href=${pluginData?.url} target="_blank" class="nfd-solutions-availble-list-item-button" data-nfd-installer-plugin-slug=${pluginData?.slug} data-nfd-installer-plugin-provider=${pluginData?.providerName}>Install</a>`;
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
        entitlements?.forEach( ( data ) => ( myPlugins.innerHTML +=  this.buildPluginsBlock(data)   ) );
         
        wpBody.appendChild(myPlugins)
    }
}

const pluginList = new MyPluginTools();
