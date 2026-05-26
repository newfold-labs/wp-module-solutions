/**
 * Stable `data-testid` values for Playwright and component markup.
 * Import in UI code; Playwright helpers import the same module to avoid drift.
 */
export const E2E_TEST_IDS = Object.freeze( {
	addNewApp: 'nfd-solutions-addnew-app',
	addNewPrimaryTitle: 'nfd-solutions-addnew-primary-title',
	mySolutionsContainer: 'nfd-solutions-my-solutions-container',
	pluginsListEntitlements: 'nfd-solutions-plugins-list-entitlements',
	pluginsListPremium: 'nfd-solutions-plugins-list-premium',
	pluginCard: ( slug ) => `nfd-solutions-plugin-card-${ slug }`,
	pluginCardTitle: ( slug ) => `nfd-solutions-plugin-card-${ slug }-title`,
	pluginCardCta: ( slug ) => `nfd-solutions-plugin-card-${ slug }-cta`,
	solutionsCommercePageTitle: 'nfd-solutions-commerce-page-title',
	solutionsAppHeader: 'nfd-solutions-app-header',
	solutionsPageTitle: 'nfd-solutions-page-title',
	brandLogo: 'nfd-solutions-brand-logo',
	brandLogoFallback: 'nfd-solutions-brand-logo-fallback',
	upgradeBanner: 'nfd-solutions-upgrade-banner',
	upgradeBannerTitle: 'nfd-solutions-upgrade-banner-title',
	upgradeBannerButton: 'nfd-solutions-upgrade-banner-button',
	toolCard: ( slug ) => `nfd-solutions-tool-card-${ slug }`,
	toolCardTitle: ( slug ) => `nfd-solutions-tool-card-${ slug }-title`,
	toolCardCta: ( slug ) => `nfd-solutions-tool-card-${ slug }-cta`,
	installTabIcon: 'nfd-solutions-install-tab-icon',
} );

/**
 * CSS selector for a data-testid (for page.locator).
 *
 * @param {string} id
 * @returns {string}
 */
export function testIdSelector( id ) {
	return `[data-testid="${ id }"]`;
}
