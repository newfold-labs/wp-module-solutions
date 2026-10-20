---
name: wp-module-solutions
title: Development
description: Lint, test, and workflow.
updated: 2026-05-21
---

# Development

PHP: `composer run lint`, `composer run fix`.

## PHP / WPBrowser

Tests: `composer run test` (Codeception **`wpunit`**, requires `.env.testing` with DB/WP paths). When changing dependencies, update [dependencies.md](dependencies.md). When cutting a release, update **docs/changelog.md**.

## Playwright (consumer wiring)

Browser specs ship under **`tests/playwright/specs/`** and **`tests/playwright/helpers/`**. Host plugins run Playwright from their repo; **`playwright.config.mjs`** sets **`PLUGIN_DIR`** to the brand plugin root so **`helpers/index.js`** can `createRequire` the host **`tests/playwright/helpers/index.js`** entry (see [wp-plugin-bluehost#1504](https://github.com/newfold-labs/wp-plugin-bluehost/pull/1504) and module [#603](https://github.com/newfold-labs/wp-module-solutions/pull/603)). Use **`.js`** spec/helper files — native **`.mjs`** bypasses Playwright’s transform on 1.63+.

Examples:

- **`solutions-smoke.spec.js`** — read-only **`@env-any`** smoke (My Solutions tab, commerce branding payload).
- **`solutions-page.spec.js`** — app tools and installer attributes (**`@env-local`**, WP-CLI fixtures).
- **`solutions-branding.spec.js`** — **`window.NewfoldSolutions.branding`** shape plus **`wordmarkUrl`** preset rules. **`BrandLogo`** DOM checks run only when **`.nfd-solutions-app-header`** is present (standalone **`solutions-page`** bundle); brand plugins that embed **`solutions-page-component`** (which exports **`Content`** plus the **`getSolutionsPageTitle`** helper) assert localized payload only.

Pass **`PLUGIN_ID`** to match the loader’s `admin.php?page=` slug (e.g. `bluehost` vs `hostgator`) alongside the rest of your harness env vars.

### Bundle export smoke test

**`npm run test:smoke`** (`tests/smoke/solutions-page-component-exports.cjs`) loads the **built** `solutions-page-component` bundle and asserts its public API — **`Content`** and **`getSolutionsPageTitle`** — is exported and that `getSolutionsPageTitle()` returns the plan-aware title. The bundle is a webpack `commonjs2` library whose externals resolve against browser globals (`window.React`, `window.ReactJSXRuntime`, `window.lodash`, `window.wp.*`), so the test wires those to the installed packages before requiring the artifact. Run it after **`npm run build`** to catch a missing/tree-shaken export before host plugins consume the bundle.

### E2E `data-testid` hooks

`data-testid` strings are set inline on Solutions UI components. The canonical list for Playwright lives in **`tests/playwright/constants/e2eTestIds.js`** (`E2E_TEST_IDS`); **`tests/playwright/helpers/index.js`** builds **`SELECTORS`** from that file. When adding or renaming a test id, update both the component markup and **`e2eTestIds.js`**. Prefer **`SELECTORS.*`** (or **`page.getByTestId(E2E_TEST_IDS.…)`**) over class-based queries. Host commerce shells (Bluehost/HostGator `#/commerce`) use **`nfd-solutions-commerce-page-title`** on the page `<h1>`; the module **`Header`** uses **`nfd-solutions-page-title`** when the full **`solutions-page`** bundle renders. Both surfaces derive their title text from **`getSolutionsPageTitle()`** (`src/common/utils`), so an active solution reads "Premium tools available in &lt;add-on name&gt;" (e.g. "eCommerce Premium Add-On") and falls back to the generic add-ons title otherwise. Installer modal markup still comes from **`wp-module-installer`** (class selectors until that package adds test ids).
