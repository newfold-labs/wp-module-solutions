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

Browser specs ship under **`tests/playwright/specs/`** and **`tests/playwright/helpers/`**. Host plugins (or blueprint harnesses) typically run Playwright from their own repo while pointing **`PLUGIN_DIR`** at this module root so **`helpers/index.mjs`** can load shared WordPress helpers and fixtures.

Examples:

- **`solutions-page.spec.mjs`** — app tools and installer attributes.
- **`solutions-branding.spec.mjs`** — **`window.NewfoldSolutions.branding`** shape plus **`wordmarkUrl`** preset rules. **`BrandLogo`** DOM checks run only when **`.nfd-solutions-app-header`** is present (standalone **`solutions-page`** bundle); brand plugins that embed **`solutions-page-component`** (Content only) assert localized payload only.

Pass **`PLUGIN_ID`** to match the loader’s `admin.php?page=` slug (e.g. `bluehost` vs `hostgator`) alongside the rest of your harness env vars.

### E2E `data-testid` hooks

Stable selectors live in **`src/common/constants/e2eTestIds.js`** (`E2E_TEST_IDS`). React markup and **`tests/playwright/helpers/index.mjs`** import the same constants so specs do not drift from UI refactors. Prefer **`SELECTORS.*`** (or **`page.getByTestId(E2E_TEST_IDS.…)`**) over class-based queries for Solutions-owned UI. Host commerce shells (Bluehost/HostGator `#/commerce`) expose **`nfd-solutions-commerce-page-title`** on the page `<h1>`; the module **`Header`** uses **`nfd-solutions-page-title`** when the full **`solutions-page`** bundle renders. Installer modal markup still comes from **`wp-module-installer`** (class selectors until that package adds test ids).
