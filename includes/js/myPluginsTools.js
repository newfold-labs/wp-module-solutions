// window.addEventListener("DOMContentLoaded", () => {
  
// })


const availblePluginsData = {
    "entitlements":[ {
        "type": "plugin",
        "name": "The HostGator Plugin",
        "description": "WordPress plugin that integrates a WordPress site with the HostGator control panel, including performance, security, and update features.",
        "author": {
            "name": "HostGator",
            "url": "https://hostgator.com"
        },
        "url": "https://hostgator.com",
        "download": "https://github.com/newfold-labs/wp-plugin-hostgator/releases/download/2.11.3/wp-plugin-hostgator.zip",
        "slug": "wp-plugin-hostgator",
        "basename": "wp-plugin-hostgator/wp-plugin-hostgator.php",
        "image": {
            "primaryImage": "https://hiive-space-cdn.nyc3.cdn.digitaloceanspaces.com/marketplace/premium-plugins/yoast-pro.webp"
        }
  },
  {
    "type": "plugin",
    "name": "The HostGator Plugin1",
    "description": "WordPress plugin that integrates a WordPress site with the HostGator control panel, including performance, security, and update features.",
    "author": {
        "name": "HostGator",
        "url": "https://hostgator.com"
    },
    "url": "https://hostgator.com",
    "download": "https://github.com/newfold-labs/wp-plugin-hostgator/releases/download/2.11.3/wp-plugin-hostgator.zip",
    "slug": "wp-plugin-hostgator",
    "basename": "wp-plugin-hostgator/wp-plugin-hostgator.php",
    "image": {
        "primaryImage": "https://hiive-space-cdn.nyc3.cdn.digitaloceanspaces.com/marketplace/premium-plugins/yoast-pro.webp"
    }
},
{
    "type": "plugin",
    "name": "The HostGator Plugin2",
    "description": "WordPress plugin that integrates a WordPress site with the HostGator control panel,WordPress plugin that integrates a WordPress site with the HostGator control panel, including performance, security, and update features.",
    "author": {
        "name": "HostGator",
        "url": "https://hostgator.com"
    },
    "url": "https://hostgator.com",
    "download": "https://github.com/newfold-labs/wp-plugin-hostgator/releases/download/2.11.3/wp-plugin-hostgator.zip",
    "slug": "wp-plugin-hostgator",
    "basename": "wp-plugin-hostgator/wp-plugin-hostgator.php",
    "image": {
        "primaryImage": "https://hiive-space-cdn.nyc3.cdn.digitaloceanspaces.com/marketplace/premium-plugins/yoast-pro.webp"
    }
}]
}

const buildPluginsBlock = ( pluginData ) => {
    return `<div class="nfd-solutions-availble-list-item">
                <div><img src=${pluginData?.image?.primaryImage} width="128px" height="128px" /></div>
                <div><h3 class="nfd-solutions-availble-list-item-title">${pluginData?.name}</h3><p>${pluginData?.description}</p></div>
                <div><button class="nfd-solutions-availble-list-item-button">Manage</button></div>
            </div>`;
}

const wpBody = document.getElementById("wpbody-content");

let myPlugins = document.createElement("div");
myPlugins.classList.add("nfd-solutions-availble-list")
 availblePluginsData?.entitlements?.forEach( ( data ) => ( myPlugins.innerHTML +=  buildPluginsBlock(data)   ) );
 
wpBody.appendChild(myPlugins)