<?php

namespace NewfoldLabs\WP\Module\Solutions;

use NewfoldLabs\WP\ModuleLoader\Container;

/**
 * Branding payloads for localization.
 *
 * @coversDefaultClass \NewfoldLabs\WP\Module\Solutions\SolutionsBranding
 */
class SolutionsBrandingWPUnitTest extends \lucatume\WPBrowser\TestCase\WPTestCase {

	/**
	 * Ensure filters do not leak across tests.
	 *
	 * @return void
	 */
	protected function tearDown(): void {
		remove_all_filters( 'nfd_solutions_branding' );
		parent::tearDown();
	}

	/**
	 * Builds a Container mock whose plugin payload can be tweaked by tests.
	 *
	 * @param object     $plugin  Plugin-shaped stdClass (`id`, optional `brand`).
	 * @param mixed|null $branding Stored `solutions_branding` merge (array|\Closure|null).
	 *
	 * @return Container|\PHPUnit\Framework\MockObject\MockObject
	 */
	private function branding_container_mock( object $plugin, $branding = null ) {
		$container          = $this->createMock( Container::class );
		$has_branding_merge = null !== $branding;
		$container->method( 'plugin' )->willReturn( $plugin );
		$container->method( 'has' )->willReturnCallback(
			static function ( $key ) use ( $has_branding_merge ) {
				return $has_branding_merge && 'solutions_branding' === $key;
			}
		);
		$container->method( 'get' )->willReturnCallback(
			static function ( $key ) use ( $branding ) {
				return 'solutions_branding' === $key ? $branding : null;
			}
		);

		return $container;
	}

	/**
	 * Verifies preset HostGator URLs populate when loader plugin slug is hostgator.
	 *
	 * @return void
	 */
	public function test_hostgator_defaults_include_host_urls() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'hostgator', $branding['pluginId'] ?? null );
		$this->assertStringContainsString( 'hostgator.com', $branding['urls']['helpArticleSolutions'] ?? '' );
		$this->assertSame(
			SolutionsBranding::DEFAULT_ECOM_FAMILY_CTB_ID,
			$branding['ctbs']['ecomFamily']['id'] ?? null
		);

		$this->assertArrayNotHasKey(
			'wordmarkUrl',
			isset( $branding['assets'] ) && is_array( $branding['assets'] ) ? $branding['assets'] : array(),
			'HostGator should not ship a default header wordmark until marketing approves.'
		);
		$this->assertSame( '', isset( $branding['assets']['tabIconSvg'] ) ? $branding['assets']['tabIconSvg'] : 'non-empty' );
	}

	/**
	 * Bluehost preset should expose a module wordmark URL (static SVG file).
	 *
	 * @return void
	 */
	public function test_bluehost_defaults_include_wordmark_url() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		$container = $this->branding_container_mock( $plugin );

		$branding = SolutionsBranding::build_for_container( $container );

		$wordmark = $branding['assets']['wordmarkUrl'] ?? '';
		$this->assertIsString( $wordmark );
		$this->assertStringContainsString( 'bluehost.svg', $wordmark );

		$tab_icon = $branding['assets']['tabIconSvg'] ?? '';
		$this->assertStringContainsString( 'nfd-tools-plugin-brand-icon', $tab_icon );
		$this->assertStringContainsString( 'fill="#196bde"', $tab_icon );
	}

	/**
	 * Missing `plugin()->id` should fall back to the Bluehost preset.
	 *
	 * @covers ::build_for_container
	 *
	 * @return void
	 */
	public function test_missing_plugin_id_defaults_to_bluehost_preset() {
		$plugin        = new \stdClass();
		$plugin->brand = 'hostgator';

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'bluehost', $branding['pluginId'] ?? null );
		$this->assertStringContainsString(
			'bluehost.svg',
			isset( $branding['assets']['wordmarkUrl'] ) ? $branding['assets']['wordmarkUrl'] : ''
		);
	}

	/**
	 * Mixed-case slug should normalize to presets (Bluehost lattice + module wordmark).
	 *
	 * @return void
	 */
	public function test_plugin_id_case_normalized_for_bluehost_preset() {
		$plugin        = new \stdClass();
		$plugin->id    = 'BLUEHOST';
		$plugin->brand = 'bluehost';

		$container = $this->branding_container_mock( $plugin );

		$branding = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'bluehost', $branding['pluginId'] ?? null );
		$this->assertStringContainsString( 'bluehost.svg', $branding['assets']['wordmarkUrl'] ?? '' );
	}

	/**
	 * Unknown presets should retain the lattice tab icon fallback (no bundled wordmark key).
	 *
	 * @return void
	 */
	public function test_unknown_preset_slug_preserves_fallback_tab_icon_without_wordmark() {
		$plugin        = new \stdClass();
		$plugin->id    = 'acme-brand';
		$plugin->brand = 'acme';

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'acme-brand', $branding['pluginId'] ?? null );
		$this->assertSame( 'Acme-brand', $branding['brandDisplayName'] ?? null );

		$this->assertStringContainsString( 'nfd-tools-plugin-brand-icon', $branding['assets']['tabIconSvg'] ?? '' );
		$this->assertArrayNotHasKey(
			'wordmarkUrl',
			isset( $branding['assets'] ) && is_array( $branding['assets'] ) ? $branding['assets'] : array()
		);
	}

	/**
	 * Verifies slug-based display names capitalize only the leading character for unknown presets.
	 *
	 * @return void
	 */
	public function test_unknown_preset_display_name_matches_ucfirst_of_slug() {
		$plugin        = new \stdClass();
		$plugin->id    = 'rocket-labs';
		$plugin->brand = 'rocket';

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'Rocket-labs', $branding['brandDisplayName'] ?? null );
	}

	/**
	 * `brandKey` inherits the localized `plugin()->brand` string when present.
	 *
	 * @return void
	 */
	public function test_brand_key_uses_plugin_brand_string_when_available() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator_premium_us';

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'hostgator_premium_us', $branding['brandKey'] ?? null );
	}

	/**
	 * Nested array merges from the container overwrite defaults (HostGator tab icon).
	 *
	 * @return void
	 */
	public function test_array_container_merge_sets_tab_icon_for_host_preset() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';
		$merge_payload = array(
			'assets' => array(
				'tabIconSvg' => 'MERGED_TAB_ICON_TOKEN',
			),
		);

		$container = $this->branding_container_mock( $plugin, $merge_payload );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'MERGED_TAB_ICON_TOKEN', $branding['assets']['tabIconSvg'] ?? null );
		$this->assertArrayNotHasKey( 'wordmarkUrl', isset( $branding['assets'] ) ? $branding['assets'] : array() );
	}

	/**
	 * Host plugins may supply a wordmark explicitly until marketing settles on bundled assets.
	 *
	 * @return void
	 */
	public function test_container_merge_can_add_optional_wordmark_on_host_preset() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';
		$merge_payload = array(
			'assets' => array(
				'tabIconSvg'  => '',
				'wordmarkUrl' => 'https://cdn.example/hostgator-approved-wordmark.svg',
			),
		);

		$container = $this->branding_container_mock( $plugin, $merge_payload );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame(
			'https://cdn.example/hostgator-approved-wordmark.svg',
			isset( $branding['assets']['wordmarkUrl'] ) ? $branding['assets']['wordmarkUrl'] : ''
		);
	}

	/**
	 * Callable container entries should defer to resolver output when array-shaped.
	 *
	 * @return void
	 */
	public function test_callable_container_merge_overlays_destination_urls() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found -- Signature mirrors container merges that receive the loader instance.
		$merge = static function ( Container $_container ): array {
			return array(
				'urls' => array(
					'accountCenterLearnMore' => 'https://account-center.example/from-callable/',
				),
			);
		};

		$container = $this->branding_container_mock( $plugin, $merge );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame(
			'https://account-center.example/from-callable/',
			$branding['urls']['accountCenterLearnMore'] ?? ''
		);
		$this->assertStringStartsWith( 'https://www.hostgator.com', $branding['urls']['helpArticleSolutions'] ?? '' );
	}

	/**
	 * Non-array resolver output should leave defaults untouched (invalid merge payload).
	 *
	 * @return void
	 */
	public function test_callable_container_merge_non_array_is_ignored() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		$merge = static function (): string {
			return 'unexpected';
		};

		$container = $this->branding_container_mock( $plugin, $merge );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( '', $branding['assets']['tabIconSvg'] ?? 'non-empty' );
	}

	/**
	 * `get_localization_branding` should mirror what `window.NewfoldSolutions` embeds via `build_for_container`.
	 *
	 * @return void
	 */
	public function test_get_localization_branding_aliases_build_payload() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		$container         = $this->branding_container_mock( $plugin );
		$from_build        = SolutionsBranding::build_for_container( $container );
		$from_localization = SolutionsBranding::get_localization_branding( $container );

		$this->assertEquals( $from_build, $from_localization );
	}

	/**
	 * Consumers can tweak the merge via `nfd_solutions_branding`.
	 *
	 * @return void
	 */
	public function test_branding_payload_passes_through_nfd_solutions_branding_filter() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				$merged['filterMarker'] = 'present';

				return $merged;
			},
			9,
			1
		);

		$container = $this->branding_container_mock( $plugin );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'present', isset( $branding['filterMarker'] ) ? $branding['filterMarker'] : null );
	}

	/**
	 * Filter receives two args (merged payload + container) per hook contract (priority 30).
	 *
	 * @return void
	 */
	public function test_branding_filter_receives_container_second_argument() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		$container = $this->branding_container_mock( $plugin );

		$observed_second_arg = array(
			'container_seen' => false,
		);

		add_filter(
			'nfd_solutions_branding',
			static function ( $merged, $maybe_container ) use ( &$observed_second_arg ) {
				if ( null !== $maybe_container && ! is_scalar( $maybe_container ) && $maybe_container instanceof Container ) {
					$observed_second_arg['container_seen'] = true;
				}

				return $merged;
			},
			99,
			2
		);

		SolutionsBranding::build_for_container( $container );

		$this->assertTrue(
			( true === isset( $observed_second_arg['container_seen'] ) && true === $observed_second_arg['container_seen'] ),
			'Filter should expose the loader container reference as argument 2.'
		);
	}

	/**
	 * Confirms sanitized primary hues mirror Bluehost presets.
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_reads_colors_primary_bluehost_preset() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		$container = $this->branding_container_mock( $plugin );

		$this->assertSame( '#336ad7', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * Confirms shorthand CSS hex hues normalize with leading hashes.
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_normalizes_three_digit_hex() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				$merged['colors']['primary'] = 'ABC';

				return $merged;
			},
			5,
			1
		);

		$container = $this->branding_container_mock( $plugin );

		$this->assertSame( '#abc', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * Invalid primary colors coerce to neutral module default `#336AD7`.
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_invalid_returns_default_fallback() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				$merged['colors']['primary'] = 'not-a-real-color';

				return $merged;
			},
			7,
			1
		);

		$container = $this->branding_container_mock( $plugin );

		$this->assertSame( '#336AD7', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * Plugin Install inline script wraps JSON-encoded tab icon markup.
	 *
	 * @return void
	 */
	public function test_get_plugin_install_tab_icon_inline_script_includes_encoded_icon() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';
		$merge_payload = array(
			'assets' => array(
				'tabIconSvg' => 'INLINE_ICON_TOKEN_MARKER',
			),
		);

		$container = $this->branding_container_mock( $plugin, $merge_payload );
		$script    = SolutionsBranding::get_plugin_install_tab_icon_inline_script( $container );

		$this->assertStringContainsString( 'DOMContentLoaded', $script );
		$this->assertStringContainsString( 'plugin-install-nfd_solutions', $script );
		$this->assertStringContainsString( 'INLINE_ICON_TOKEN_MARKER', $script );
	}

	/**
	 * HostGator accent color should propagate when merge overrides presets.
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_prefers_colors_from_container_merge() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';
		$merge_payload = array(
			'colors' => array(
				'primary' => '#348f36',
			),
		);

		$container = $this->branding_container_mock( $plugin, $merge_payload );

		$this->assertSame( '#348f36', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * WordPress may emit mixed-case hashes; sanitization lowers them consistently.
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_lowercases_six_digit_values() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				$merged['colors']['primary'] = '#ABCDEF';

				return $merged;
			},
			6,
			1
		);

		$container = $this->branding_container_mock( $plugin );

		$this->assertSame( '#abcdef', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * `brandKey` should stay preset-derived unless `plugin()->brand` is a string.
	 *
	 * @return void
	 */
	public function test_non_string_plugin_brand_does_not_override_brand_key() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = array( 'unsupported' );

		$container = $this->branding_container_mock( $plugin );

		$branding = SolutionsBranding::build_for_container( $container );

		$this->assertSame( 'bluehost', $branding['brandKey'] ?? null );
	}

	/**
	 * Filters may coerce `assets.wordmarkUrl` to explicit false for consumers that omit images entirely.
	 *
	 * @return void
	 */
	public function test_filter_may_force_wordmark_url_boolean_false_even_for_bluehost() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				if ( ! isset( $merged['assets'] ) || ! is_array( $merged['assets'] ) ) {
					$merged['assets'] = array();
				}

				$merged['assets']['wordmarkUrl'] = false;

				return $merged;
			},
			99,
			1
		);

		$container = $this->branding_container_mock( $plugin );

		$branding = SolutionsBranding::build_for_container( $container );

		$this->assertArrayHasKey( 'assets', $branding );
		$this->assertIsArray( $branding['assets'] ?? null );
		$this->assertArrayHasKey( 'wordmarkUrl', isset( $branding['assets'] ) ? $branding['assets'] : array() );
		$this->assertSame( false, $branding['assets']['wordmarkUrl'] ?? null );
	}

	/**
	 * Container merges should trump Bluehost lattice tab markup while leaving other assets intact.
	 *
	 * @return void
	 */
	public function test_bluehost_merge_overwrites_default_tab_icon_svg_markup() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';
		$merge_payload = array(
			'assets' => array(
				'tabIconSvg' => 'CUSTOM_BLUEHOST_TAB_SVG_MARKER',
			),
		);

		$container = $this->branding_container_mock( $plugin, $merge_payload );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertSame(
			'CUSTOM_BLUEHOST_TAB_SVG_MARKER',
			isset( $branding['assets']['tabIconSvg'] ) ? $branding['assets']['tabIconSvg'] : null
		);
		$this->assertIsString( $branding['assets']['wordmarkUrl'] ?? null );
		$this->assertStringContainsString(
			'bluehost.svg',
			isset( $branding['assets']['wordmarkUrl'] ) ? $branding['assets']['wordmarkUrl'] : ''
		);
	}

	/**
	 * Empty tab icon payloads should stringify to falsy literals for the Plugins » Install injector.
	 *
	 * @return void
	 */
	public function test_tab_icon_inline_script_uses_double_quoted_empty_string_when_icon_markup_missing() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		$container = $this->branding_container_mock( $plugin );
		$script    = SolutionsBranding::get_plugin_install_tab_icon_inline_script( $container );

		$this->assertMatchesRegularExpression( '/let\s+icon\s*=\s*\"\"/', $script );
		$this->assertStringContainsString( 'if (filterPremiumLink && icon)', $script );
	}

	/**
	 * Trimmed-but-empty hue strings coerce to canonical defaults (invalid input path).
	 *
	 * @return void
	 */
	public function test_get_primary_color_hex_empty_primary_string_returns_default_fallback() {
		$plugin        = new \stdClass();
		$plugin->id    = 'hostgator';
		$plugin->brand = 'hostgator';

		add_filter(
			'nfd_solutions_branding',
			static function ( array $merged ) {
				$merged['colors']['primary'] = '   ';

				return $merged;
			},
			21,
			1
		);

		$container = $this->branding_container_mock( $plugin );

		$this->assertSame( '#336AD7', SolutionsBranding::get_primary_color_hex( $container ) );
	}

	/**
	 * Callable merges returning an empty array should still traverse the resolver path unchanged.
	 *
	 * @return void
	 */
	public function test_callable_container_merge_payload_empty_array_is_no_op() {
		$plugin        = new \stdClass();
		$plugin->id    = 'bluehost';
		$plugin->brand = 'bluehost';

		$merge = static function (): array {
			return array();
		};

		$container = $this->branding_container_mock( $plugin, $merge );
		$branding  = SolutionsBranding::build_for_container( $container );

		$this->assertStringContainsString(
			'bluehost.svg',
			isset( $branding['assets']['wordmarkUrl'] ) ? $branding['assets']['wordmarkUrl'] : ''
		);
	}
}
