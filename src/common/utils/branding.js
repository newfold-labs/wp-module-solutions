/**
 * Branding precedence: values from localized `window.NewfoldSolutions.branding` win;
 * gaps are filled from `window.NewfoldRuntime.ctbs.ecomFamily` when present.
 *
 * @returns {Record<string, unknown>} Resolved branding for Solutions UI (`urls`, `ctbs`, `colors`, ids).
 */
export function getSolutionsBranding() {
	const base =
		window.NewfoldSolutions?.branding &&
		typeof window.NewfoldSolutions.branding === 'object'
			? { ...window.NewfoldSolutions.branding }
			: {};

	base.urls =
		base.urls && typeof base.urls === 'object' ? { ...base.urls } : {};

	base.ctbs =
		base.ctbs && typeof base.ctbs === 'object' ? { ...base.ctbs } : {};

	base.assets =
		base.assets && typeof base.assets === 'object' ? { ...base.assets } : {};

	const rt = runtimeEcom();
	const runtimeCtbsPresent =
		rt && typeof rt === 'object' && typeof rt.url === 'string';
	const localizedEcomFamily = base.ctbs.ecomFamily;

	if ( runtimeCtbsPresent && ! isPlainObject( localizedEcomFamily ) ) {
		base.ctbs.ecomFamily = {
			id: rt.id ?? '',
			url: rt.url,
		};
	} else if ( runtimeCtbsPresent && isPlainObject( localizedEcomFamily ) ) {
		const ec = localizedEcomFamily;

		base.ctbs.ecomFamily = {
			id:
				typeof ec.id === 'string' && ec.id.length ? ec.id : rt.id ?? '',
			url:
				typeof ec.url === 'string' && ec.url.length ? ec.url : rt.url,
		};
	}

	if (
		runtimeCtbsPresent &&
		(typeof base.urls.ecomFamilyUpgrade !== 'string' ||
			! base.urls.ecomFamilyUpgrade.length)
	) {
		base.urls.ecomFamilyUpgrade = rt.url;
	}

	return base;
}

/**
 * eCom family CTB id + upgrade URL (runtime fills gaps PHP did not localize).
 *
 * @returns {{ href: string, ctbId: string }} Resolved link + CTB UUID.
 */
export function getEcomFamilyCtb() {
	const brand = getSolutionsBranding();
	const ec = brand?.ctbs?.ecomFamily ?? {};

	let href = typeof ec.url === 'string' ? ec.url : '';
	const id = typeof ec.id === 'string' ? ec.id : '';

	const rt = runtimeEcom();
	if ( ! href.length && rt?.url ) {
		href = rt.url;
	}

	let ctbId = id.length ? id : '';
	if ( ! ctbId.length && rt?.id ) {
		ctbId = typeof rt.id === 'string' ? rt.id : '';
	}

	return {
		href,
		ctbId,
	};
}

/** @returns {Record<string,string>|undefined} */
function runtimeEcom() {
	return window.NewfoldRuntime?.ctbs?.ecomFamily;
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
function isPlainObject( value ) {
	return (
		null !== value &&
		typeof value === 'object' &&
		! Array.isArray( value )
	);
}
