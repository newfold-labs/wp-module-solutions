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

### 3. Setup GitHub registry

Follow instructions at [GH Packages Setup](https://gist.github.com/aulisius/1a6e4961f17039d82275a6941331b021).

### 4. Install the `@newfold-labs/wp-module-solutions` npm package.

 ```bash
 npm install @newfold-labs/wp-module-solutions
 ```