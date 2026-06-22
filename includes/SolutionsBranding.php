<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;

/**
 * Branding defaults and merge order for Solutions UI (localized to JS).
 */
class SolutionsBranding {

	/** CTB UUID shared by BH/HG commerce family upsells (matches host plugin runtime.ctbs.ecomFamily). */
	public const DEFAULT_ECOM_FAMILY_CTB_ID = '5dc83bdd-9274-4557-a6d7-0b2adbc3919f';

	/**
	 * Cached branding keyed by serialized container fingerprint is unsafe; rebuild per request.
	 *
	 * @param Container $container Module loader container.
	 * @return array<string, mixed>
	 */
	public static function build_for_container( Container $container ): array {
		$plugin    = $container->plugin();
		$plugin_id = isset( $plugin->id ) ? (string) $plugin->id : 'bluehost';
		$defaults  = self::defaults_for_plugin_id( $plugin_id );

		if ( isset( $plugin->brand ) && is_string( $plugin->brand ) ) {
			$defaults['brandKey'] = $plugin->brand;
		}

		$merged = $defaults;

		$override = null;
		if ( method_exists( $container, 'has' ) && $container->has( 'solutions_branding' ) ) {
			$override = $container->get( 'solutions_branding' );
		}
		if ( null !== $override ) {
			if ( is_callable( $override ) ) {
				$resolved = call_user_func( $override, $container );
				if ( is_array( $resolved ) ) {
					$merged = self::deep_merge_arrays( $merged, $resolved );
				}
			} elseif ( is_array( $override ) ) {
				$merged = self::deep_merge_arrays( $merged, $override );
			}
		}

		/**
		 * Filter branding for Solutions localized data and scripts.
		 *
		 * @param array     $merged    Branding data.
		 * @param Container $container Loader container.
		 */
		$filtered = \apply_filters( 'nfd_solutions_branding', $merged, $container );
		if ( ! is_array( $filtered ) ) {
			$filtered = $merged;
		}

		return self::sanitize_branding_payload( $filtered );
	}

	/**
	 * JSON-serializable localization payload keyed as `branding` for NewfoldSolutions.
	 *
	 * @param Container $container Module loader container.
	 * @return array<string, mixed>
	 */
	public static function get_localization_branding( Container $container ): array {
		return self::build_for_container( $container );
	}

	/**
	 * Inline JS for Plugin Install tab icon (kses-sanitized SVG markup JSON-encoded).
	 *
	 * @param Container $container Module loader container.
	 * @return string Script body (no script tags).
	 */
	public static function get_plugin_install_tab_icon_inline_script( Container $container ): string {
		$branding      = self::build_for_container( $container );
		$icon_markup   = isset( $branding['assets']['tabIconSvg'] ) ? (string) $branding['assets']['tabIconSvg'] : '';
		$icon_json     = wp_json_encode( $icon_markup );
		$safe_icon_var = false === $icon_json ? '""' : $icon_json;

		return "
			document.addEventListener('DOMContentLoaded', function() {
				let icon = {$safe_icon_var};
				const filterPremiumLink = document.querySelector('.plugin-install-nfd_solutions > a');
				if (filterPremiumLink && icon) {
					filterPremiumLink.innerHTML = icon + filterPremiumLink.innerHTML;
				}
			});
		";
	}

	/**
	 * Sanitized CSS hex primary color for inline :root overrides.
	 *
	 * @param Container $container Module loader container.
	 * @return string
	 */
	public static function get_primary_color_hex( Container $container ): string {
		$branding = self::build_for_container( $container );
		$hex      = isset( $branding['colors']['primary'] ) ? (string) $branding['colors']['primary'] : '';
		return self::sanitize_hex_color_allow_short( $hex );
	}

	/**
	 * Build defaults for branding values using the active plugin slug.
	 *
	 * @param string $plugin_id Plugin screen id slug.
	 * @return array<string, mixed>
	 */
	protected static function defaults_for_plugin_id( string $plugin_id ): array {
		$plugin_id = strtolower( $plugin_id );

		$display_names = array(
			'bluehost'  => __( 'Bluehost', 'wp-module-solutions' ),
			'hostgator' => __( 'HostGator', 'wp-module-solutions' ),
		);

		$brand_display = isset( $display_names[ $plugin_id ] )
			? $display_names[ $plugin_id ]
			: ucfirst( $plugin_id );

		$maps = self::preset_maps();

		if ( isset( $maps[ $plugin_id ] ) ) {
			$preset = self::deep_merge_arrays(
				self::preset_base_skeleton( $brand_display, $plugin_id ),
				$maps[ $plugin_id ]
			);

			$preset['brandDisplayName'] = $brand_display;
			$preset['pluginId']         = $plugin_id;

			/*
			 * Tab icon markup: BH uses the lattice mark. Other brands default to empty so host plugins
			 * can supply imagery (assets.tabIconSvg) without inheriting BH-specific SVG.
			 */
			if ( 'bluehost' === $plugin_id ) {
				$tab_fill                        = isset( $preset['colors']['tabIconFill'] )
					? (string) $preset['colors']['tabIconFill']
					: '#196BDE';
				$preset['assets']['tabIconSvg']  = self::square_grid_tab_icon_markup( $tab_fill );
				$preset['assets']['wordmarkUrl'] = esc_url(
					self::module_asset_url( 'assets/wordmarks/bluehost.svg' )
				);
			} else {
				/*
				 * Other brands (e.g. HostGator): tab icon/wordmark imagery comes from
				 * host plugins via container merge; Solutions header falls back to
				 * brandDisplayName until marketing supplies assets.wordmarkUrl.
				 */
				$preset['assets']['tabIconSvg'] = '';
			}

			return $preset;
		}

		return self::deep_merge_arrays(
			self::preset_base_skeleton( $brand_display, $plugin_id ),
			array(
				'colors'           => array(
					'primary'     => '#336AD7',
					'tabIconFill' => '#196BDE',
				),
				'assets'           => array(
					'tabIconSvg' => self::square_grid_tab_icon_markup( '#196BDE' ),
				),
				'brandDisplayName' => $brand_display,
				'pluginId'         => $plugin_id,
			)
		);
	}

	/**
	 * Host-specific URL presets keyed by loader plugin slug.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	protected static function preset_maps(): array {
		return array(
			'bluehost'  => array(
				'urls'   => array(
					'accountCenterLearnMore' => 'https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fplugins.php&utm_medium=bluehost_plugin',
					'helpArticleSolutions'   => 'https://www.bluehost.com/help/article/wp-solutions?utm_source=wp-admin&utm_medium=brand_plugin',
					'ecomFamilyUpgrade'      => 'https://www.bluehost.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY',
				),
				'ctbs'   => array(
					'ecomFamily' => array(
						'id'  => self::DEFAULT_ECOM_FAMILY_CTB_ID,
						'url' => 'https://www.bluehost.com/my-account/market-place#marketplace-WordPress%20Solutions',
					),
				),
				'colors' => array(
					'primary'     => '#336AD7',
					'tabIconFill' => '#196BDE',
				),
			),
			'hostgator' => array(
				'urls'   => array(
					'accountCenterLearnMore' => 'https://www.hostgator.com/my-account/account-center?utm_source=wp-admin%2Fplugins.php&utm_medium=hostgator_plugin',
					'helpArticleSolutions'   => 'https://www.hostgator.com/help/article/wordpress-solutions?utm_source=wp-admin&utm_medium=brand_plugin',
					'ecomFamilyUpgrade'      => 'https://www.hostgator.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY',
				),
				'ctbs'   => array(
					'ecomFamily' => array(
						'id'  => self::DEFAULT_ECOM_FAMILY_CTB_ID,
						'url' => 'https://www.hostgator.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY',
					),
				),
				'colors' => array(
					'primary'     => '#336AD7',
					'tabIconFill' => '#2C9E4B',
				),
			),
		);
	}

	/**
	 * Neutral defaults before preset merge.
	 *
	 * @param string $brand_display Localized hosting brand label.
	 * @param string $plugin_id      Plugin screen id slug.
	 * @return array<string, mixed>
	 */
	protected static function preset_base_skeleton( string $brand_display, string $plugin_id ): array {
		return array(
			'brandDisplayName' => $brand_display,
			'pluginId'         => $plugin_id,
			'brandKey'         => $plugin_id,
			'urls'             => array(
				'accountCenterLearnMore' => '',
				'helpArticleSolutions'   => '',
				'ecomFamilyUpgrade'      => '',
			),
			'ctbs'             => array(
				'ecomFamily' => array(
					'id'  => self::DEFAULT_ECOM_FAMILY_CTB_ID,
					'url' => '',
				),
			),
			'colors'           => array(
				'primary'     => '#336AD7',
				'tabIconFill' => '#196BDE',
			),
			'assets'           => array(
				'tabIconSvg' => '',
			),
		);
	}

	/**
	 * Generate default square-mark SVG markup for Plugin Install tabs.
	 *
	 * @param string $fill Hex color for icon paths.
	 * @return string
	 */
	protected static function square_grid_tab_icon_markup( string $fill ): string {
		$fill = self::sanitize_hex_color_allow_short( $fill );

		return '<svg id="nfd-tools-plugin-brand-icon" data-testid="nfd-solutions-install-tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">'
			. '<path fill-rule="evenodd" clip-rule="evenodd" d=\''
			. 'M16 4.46067V0H11.5302V4.46067H16ZM16 5.76933V10.2307H11.5302V5.76933H16ZM4.46778 16V11.5387H0V16H4.46778ZM10.2339 11.5387V16H5.76409V11.5387H10.2339ZM16 11.5387V16H11.5302V11.5387H16ZM10.2339 10.2307V5.76933H5.76409V10.2307H10.2339ZM4.46778 5.76933V10.2307H0V5.76933H4.46778ZM10.2305 0V4.46067H5.76409V0H10.2305ZM4.46778 4.46067V0H0V4.46067H4.46778Z\''
			. ' fill="' . esc_attr( $fill ) . '"/></svg>';
	}

	/**
	 * Public URL for a static file shipped inside this Composer package (e.g. SVG wordmarks).
	 *
	 * @param string $relative Path relative to the module root (use forward slashes).
	 * @return string
	 */
	protected static function module_asset_url( string $relative ): string {
		$relative  = str_replace( '\\', '/', $relative );
		$relative  = ltrim( $relative, '/' );
		$bootstrap = dirname( __DIR__ ) . '/bootstrap.php';

		return plugins_url( $relative, $bootstrap );
	}

	/**
	 * Deep-merge helper for branding payloads.
	 *
	 * @param array $base    Base associative array.
	 * @param array $overlay Overlay merged with array_replace_recursive.
	 * @return array
	 */
	protected static function deep_merge_arrays( array $base, array $overlay ): array {
		return array_replace_recursive( $base, $overlay );
	}

	/**
	 * Sanitize localization payload before exposing it to JavaScript consumers.
	 *
	 * @param array<string, mixed> $branding Branding payload.
	 * @return array<string, mixed>
	 */
	protected static function sanitize_branding_payload( array $branding ): array {
		if ( ! isset( $branding['urls'] ) || ! is_array( $branding['urls'] ) ) {
			$branding['urls'] = array();
		}
		$url_keys = array(
			'accountCenterLearnMore',
			'helpArticleSolutions',
			'ecomFamilyUpgrade',
		);
		foreach ( $url_keys as $key ) {
			$branding['urls'][ $key ] = self::sanitize_url_field(
				isset( $branding['urls'][ $key ] ) ? $branding['urls'][ $key ] : ''
			);
		}

		if ( ! isset( $branding['ctbs'] ) || ! is_array( $branding['ctbs'] ) ) {
			$branding['ctbs'] = array();
		}
		if ( ! isset( $branding['ctbs']['ecomFamily'] ) || ! is_array( $branding['ctbs']['ecomFamily'] ) ) {
			$branding['ctbs']['ecomFamily'] = array();
		}
		$branding['ctbs']['ecomFamily']['id']  = isset( $branding['ctbs']['ecomFamily']['id'] ) && is_scalar( $branding['ctbs']['ecomFamily']['id'] )
			? (string) $branding['ctbs']['ecomFamily']['id']
			: self::DEFAULT_ECOM_FAMILY_CTB_ID;
		$branding['ctbs']['ecomFamily']['url'] = self::sanitize_url_field(
			isset( $branding['ctbs']['ecomFamily']['url'] ) ? $branding['ctbs']['ecomFamily']['url'] : ''
		);

		if ( ! isset( $branding['assets'] ) || ! is_array( $branding['assets'] ) ) {
			$branding['assets'] = array();
		}
		$branding['assets']['tabIconSvg'] = self::sanitize_tab_icon_svg_markup(
			isset( $branding['assets']['tabIconSvg'] ) ? (string) $branding['assets']['tabIconSvg'] : ''
		);
		if ( array_key_exists( 'wordmarkUrl', $branding['assets'] ) ) {
			$wordmark_url = $branding['assets']['wordmarkUrl'];
			if ( false === $wordmark_url ) {
				$branding['assets']['wordmarkUrl'] = false;
			} elseif ( is_string( $wordmark_url ) ) {
				$branding['assets']['wordmarkUrl'] = self::sanitize_url_field( $wordmark_url );
			} elseif ( null !== $wordmark_url ) {
				unset( $branding['assets']['wordmarkUrl'] );
			}
		}

		if ( ! isset( $branding['colors'] ) || ! is_array( $branding['colors'] ) ) {
			$branding['colors'] = array();
		}
		$branding['colors']['primary']     = self::sanitize_hex_color_allow_short(
			isset( $branding['colors']['primary'] ) ? (string) $branding['colors']['primary'] : ''
		);
		$branding['colors']['tabIconFill'] = self::sanitize_hex_color_allow_short(
			isset( $branding['colors']['tabIconFill'] ) ? (string) $branding['colors']['tabIconFill'] : ''
		);

		return $branding;
	}

	/**
	 * Restrict URLs to expected protocols for localization payloads.
	 *
	 * @param mixed $value Candidate URL.
	 * @return string
	 */
	protected static function sanitize_url_field( $value ): string {
		if ( ! is_string( $value ) ) {
			return '';
		}
		return esc_url_raw( trim( $value ), array( 'http', 'https' ) );
	}

	/**
	 * Allowlist-safe SVG markup for the plugin-install tab icon.
	 *
	 * @param string $markup SVG markup candidate.
	 * @return string
	 */
	protected static function sanitize_tab_icon_svg_markup( string $markup ): string {
		$trimmed = trim( $markup );
		if ( '' === $trimmed ) {
			return '';
		}
		if ( 0 !== strpos( strtolower( $trimmed ), '<svg' ) ) {
			return '';
		}

		$allowed = array(
			'svg'      => array(
				'id'                  => true,
				'data-testid'         => true,
				'class'               => true,
				'xmlns'               => true,
				'viewbox'             => true,
				'width'               => true,
				'height'              => true,
				'fill'                => true,
				'stroke'              => true,
				'stroke-width'        => true,
				'role'                => true,
				'aria-hidden'         => true,
				'focusable'           => true,
				'preserveaspectratio' => true,
			),
			'g'        => array(
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'transform'    => true,
				'opacity'      => true,
			),
			'path'     => array(
				'd'            => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'fill-rule'    => true,
				'clip-rule'    => true,
				'transform'    => true,
				'opacity'      => true,
			),
			'rect'     => array(
				'x'            => true,
				'y'            => true,
				'width'        => true,
				'height'       => true,
				'rx'           => true,
				'ry'           => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'circle'   => array(
				'cx'           => true,
				'cy'           => true,
				'r'            => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'ellipse'  => array(
				'cx'           => true,
				'cy'           => true,
				'rx'           => true,
				'ry'           => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'line'     => array(
				'x1'           => true,
				'x2'           => true,
				'y1'           => true,
				'y2'           => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'polyline' => array(
				'points'       => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'polygon'  => array(
				'points'       => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
				'opacity'      => true,
			),
			'title'    => array(),
			'desc'     => array(),
		);

		return trim( wp_kses( $trimmed, $allowed ) );
	}

	/**
	 * Permit 3-digit or 6-digit hex for inline CSS/SVG usage.
	 *
	 * @param string $color Candidate color string.
	 * @return string
	 */
	protected static function sanitize_hex_color_allow_short( string $color ): string {
		$trim = strtolower( trim( $color ) );
		if ( preg_match( '/^#([a-f0-9]{6}|[a-f0-9]{3})$/', $trim ) ) {
			return $trim;
		}
		if ( preg_match( '/^([a-f0-9]{6}|[a-f0-9]{3})$/', $trim ) ) {
			return '#' . $trim;
		}
		return '#336AD7';
	}
}
