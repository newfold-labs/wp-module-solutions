# wp-module-solutions
A Newfold module that handles integration of WordPress Solutions Addon packages (content creator/ service / ecommerce) for BlueHost &amp; HostGator customers.

## Module Responsibilities

* Display list plugins & tools customer is entittled to as per their package (Content creator / Services / Ecommerce)
* Customers can setup, manage, customize, configure their plugins from `My plugins & tools` page
* Search for a particular plugin
* Add a new plugin 


## Critical Paths

* List plugin and tools
* CTAs for all actions on plugins
* Search for desired plugin
* Track recently used plugins

## Installation

### 1. Add the Newfold Satis to your `composer.json`.

 ```bash
 composer config repositories.newfold composer https://newfold-labs.github.io/satis
 ```

### 2. Require the `newfold-labs/wp-module-solutions` package.

 ```bash
 composer require newfold-labs/wp-module-solutions
 ```

## Releases

Run the `Newfold Prepare Release` github action to automatically bump the version (either patch, minor or major version), and update build and language files all at once. It will create a PR with changed files for review.
