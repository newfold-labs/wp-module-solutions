---
name: wp-module-solutions
title: Integration
description: How the module registers and integrates.
updated: 2026-05-22
---


# Integration

The module registers with the Newfold Module Loader via bootstrap.php. The host plugin typically registers a solutions service; the module integrates with link-tracker and data for analytics. See [dependencies.md](dependencies.md).

## Branding and localization payloads

Solutions UI consumes a `branding` object attached to **`window.NewfoldSolutions`** beside entitlements ([`includes/Solutions.php`](../includes/Solutions.php) → `get_newfold_solutions_payload()`). PHP builds branding through [`includes/SolutionsBranding.php`](../includes/SolutionsBranding.php) using this merge order:

1. **Defaults keyed by** `container()->plugin()->id` (for example `bluehost`, `hostgator`): URLs (`accountCenterLearnMore`, `helpArticleSolutions`, `ecomFamilyUpgrade`), mirrored `ctbs.ecomFamily.{id,url}` (same UUID as legacy runtime `NewfoldRuntime.ctbs.ecomFamily`), primary colors, SVG tab markup (`assets.tabIconSvg`), **`brandDisplayName`** for `%s` string templates translated in PHP (`__( 'Bluehost', … )` / `HostGator`), **and optionally** **`assets.wordmarkUrl`**:

   **`assets.wordmarkUrl` (Solutions page header):** **Bluehost** presets include [`assets/wordmarks/bluehost.svg`](../assets/wordmarks/bluehost.svg). **HostGator** defaults **omit `wordmarkUrl`** so **`BrandLogo`** uses the textual **`brandDisplayName`** fallback until marketing approves a URL (hosts may then set **`wordmarkUrl`** via **`solutions_branding`** or **`nfd_solutions_branding`**). Non-empty string = image URL; React renders `<img src="…">`. `false` or `''` (after merge) = hide the mark; omitted / `null` = text fallback. Use **`SolutionsBranding::module_asset_url()`** (or **`HOSTGATOR_PLUGIN_URL`**, etc.) for packaged / plugin assets.
2. **`container()->get('solutions_branding')`** when exposed as an array merge target or **`callable(Container $container): array`** (only if `Container::has()` exists).
3. **`apply_filters( 'nfd_solutions_branding', $merged, $container )`** — final override hook for bespoke brands.

Standalone Solutions admin surfaces also receive `body.nfd-solutions-admin` (when the current WP screen ID contains **`solution`**), inline `--nfd-solutions-primary` on module stylesheets, and `solutions-page-component` inline **`window.NewfoldSolutions`** that includes **`branding`**.

Front-end merges (preferred order documented for JS developers):

| Source                                                                 | Wins over |
|------------------------------------------------------------------------|-----------|
| `window.NewfoldSolutions.branding` localized from PHP                     | baseline  |
| `window.NewfoldRuntime.ctbs.ecomFamily` for missing **`url` / `id`** only | runtime   |

The helper **`src/common/utils/branding.js`** (`getSolutionsBranding`, `getEcomFamilyCtb`) implements those rules for React bundles.
