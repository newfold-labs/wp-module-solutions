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
            const installedPlugins = Object.keys( nfdPluginDetails?.installed )
            const pluginWithStatus = pluginsData.map(val => ({
              ...val,
              isInstalled: installedPlugins?.includes( val.basename ),
              isActive: Object.values( nfdPluginDetails?.active ).find( ( plugin ) => plugin === val.basename )
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

    buildPluginsBlock( pluginData ) {
        return `<div class="nfd-solutions-availble-list-item">
                    <div><img src=${pluginData?.image?.primaryImage} width="128px" height="128px" /></div>
                    <div class="details">
                        <h3 class="nfd-solutions-availble-list-item-title">${pluginData?.name}</h3>
                        <div>
                       ${ window.NewfoldRuntime.installer.renderInstallerButton( pluginData, 'nfd-solutions-availble-list-item-button' ) }
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
