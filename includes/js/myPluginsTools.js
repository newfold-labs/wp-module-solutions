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

            console.log(pluginsData)
            this.setUpContainer(pluginsData);
            this.entitlements_list = res?.data;
        })
    
    })
        
    }

    buildPluginsBlock( pluginData ) {
        return `<div class="nfd-solutions-availble-list-item">
                    <div><img src=${pluginData?.image?.primaryImage} width="128px" height="128px" /></div>
                    <div class="details">
                        <h3 class="nfd-solutions-availble-list-item-title">${pluginData?.name}</h3>
                        <div>
                        <a href=${pluginData?.cta?.url} target="_blank" class="nfd-solutions-availble-list-item-button">${pluginData?.cta?.text}</a>
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