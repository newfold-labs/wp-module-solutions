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
              isActive: plugin_details?.active_plugins?.includes( val.basename ),
              nonce: plugin_details?.nonce
            }))
            this.setUpContainer(pluginWithStatus);
        })
    
    })
        
    }

    activate_plugin ( plugin_path ){
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
          window.location.reload();
        }
      })
       
    }

    getElementByStatus( isActive, isInstalled, pluginData ) {
      if( isActive && isInstalled ){
        return `<a href=${pluginData?.cta?.url} target="_blank" class="nfd-solutions-availble-list-item-button">${pluginData?.cta?.text}</a>`;
      }else if ( isInstalled ){
        return `<button data-plugin="${pluginData?.basename}" class="nfd-solutions-availble-list-item-button nfd-activate-btn">Activate</button>`;
      }else {
        if ( pluginData?.plsProviderName && pluginData?.plsSlug ){
          return `<button class="nfd-solutions-availble-list-item-button"
          data-nfd-installer-plugin-activate=${true}
          data-nfd-installer-plugin-slug=${pluginData?.plsSlug}
          data-nfd-installer-plugin-provider=${pluginData?.plsProviderName}
          data-nfd-installer-plugin-name=${pluginData?.name}
          data-nfd-installer-plugin-url=${pluginData?.url}
          >Install</button>`;
        } else {
          return `<a href=${pluginData?.url} target="_blank" class="nfd-solutions-availble-list-item-button">Install</a>`;
        }
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
         
        wpBody.appendChild(myPlugins);
        this.bindActivateButtons();
    }

    bindActivateButtons() {
     
      const activateButtons = document.querySelectorAll(".nfd-activate-btn");
      activateButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
              const pluginPath = event.target.getAttribute("data-plugin");
              this.activate_plugin(pluginPath); 
          });
      });
  }
}


const pluginList = new MyPluginTools();
