import classNames from 'classnames';
import { E2E_TEST_IDS } from 'common/constants/e2eTestIds';
import { getSolutionsBranding } from 'common/utils/branding';

const BrandWordFallback = ( { width, brandDisplayName, className, ...props } ) => (
	<span
		className={ classNames(
			'nfd-solutions-brand-fallback-logo nfd-text-3xl nfd-font-semibold',
			className
		) }
		data-testid={ E2E_TEST_IDS.brandLogoFallback }
		style={ width ? { width, display: 'inline-block' } : undefined }
		{ ...props }
	>
		{ brandDisplayName }
	</span>
);

function resolveFallbackLabel( branding ) {
	if (
		typeof branding.brandDisplayName === 'string' &&
		branding.brandDisplayName.trim()
	) {
		return branding.brandDisplayName.trim();
	}
	if (
		typeof branding.pluginId === 'string' &&
		branding.pluginId.trim()
	) {
		return branding.pluginId;
	}
	return '';
}

/**
 * Renders the Solutions header wordmark from localized branding (static SVG URL).
 *
 * `branding.assets.wordmarkUrl`:
 * - Non-empty string: SVG (or raster) URL; rendered with `<img>` (no inline HTML).
 * - `false` or empty/whitespace string: no logo (returns null).
 * - Omitted, `null`, or non-string: text fallback via `brandDisplayName` / `pluginId`.
 *
 * Filters may point `wordmarkUrl` at module assets (`assets/wordmarks/*.svg`),
 * the host-plugin `assets/` tree, or a CDN — keep URLs allowlisted/trusted server-side.
 */
export const BrandLogo = ( { width, height, className, ...props } ) => {
	const branding = getSolutionsBranding();
	const assets =
		branding.assets && typeof branding.assets === 'object'
			? branding.assets
			: {};
	const logoUrl = assets.wordmarkUrl;

	if ( logoUrl === false ) {
		return null;
	}

	if ( typeof logoUrl === 'string' && logoUrl.trim() === '' ) {
		return null;
	}

	if ( typeof logoUrl === 'string' ) {
		const alt = resolveFallbackLabel( branding );

		return (
			<img
				src={ logoUrl.trim() }
				alt={ alt }
				data-testid={ E2E_TEST_IDS.brandLogo }
				className={ classNames(
					'nfd-solutions-brand-logo nfd-block nfd-max-w-full nfd-h-auto',
					className
				) }
				decoding="async"
				style={
					width || height
						? {
								...( width ? { width } : {} ),
								...( height ? { height } : {} ),
								objectFit: 'contain',
						  }
						: { objectFit: 'contain' }
				}
				{ ...props }
			/>
		);
	}

	const fallbackLabel = resolveFallbackLabel( branding );

	return (
		<BrandWordFallback
			width={ width }
			brandDisplayName={ fallbackLabel }
			className={ className }
			{ ...props }
		/>
	);
};
