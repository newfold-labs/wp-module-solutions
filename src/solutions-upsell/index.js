import './style.scss';
import domReady from '@wordpress/dom-ready';

domReady( () => {

	const productTypeSelect = jQuery( '#product-type' );
	if ( productTypeSelect ) {

	 	// Re-organize select.
		const currentValue = productTypeSelect.val();
		const upsellPlugins = NewfoldSolutionsUpsell || [];

		let options = [];

		// Default values.
		for ( let option of productTypeSelect.find('option') ) {
			options.push( new Option( option.text, option.value, currentValue === option.value ) )
		}

		// Add premium values.
		for ( let plugin of upsellPlugins ) {
			options.push( new Option( plugin.option_label, plugin.basename ) );
		}

		productTypeSelect.html(options).val(currentValue);

		// Apply selectWoo.
		productTypeSelect.selectWoo({
			minimumResultsForSearch: Infinity,
			templateResult: (state) => {
				const upsellPlugin = upsellPlugins.find( plugin => state.id === plugin.basename );

				return upsellPlugin ? jQuery( '<span>' + state.text + '<span class="premium-plugin-icon"></span></span>' ) : state.text;
			}
		});

		// Fix product data box.
		productTypeSelect.next('.select2').on( 'click', (e) => e.stopPropagation() );

		// Open CTB
		productTypeSelect.on( 'select2:selecting', (e) => {

			const upsellPlugin = upsellPlugins.find( plugin => e.params.args.data.id === plugin.basename );

			if ( upsellPlugin ) {
				e.preventDefault();
				e.stopPropagation();

				// Close select2.
				productTypeSelect.selectWoo('close');
				// Cleanup DOM from old elem.
				jQuery(document.body).find('.nfd-solution-upsell-trigger').remove();

				const clickableElem = jQuery( '<a href="#" class="nfd-solution-upsell-trigger"></a>' );

				clickableElem
					.attr( 'data-ctb-id', upsellPlugin.ctbId )
					.attr( 'data-nfd-installer-plugin-activate', !upsellPlugin.ctbId ? true : undefined )
					.attr( 'data-nfd-installer-download-url', !upsellPlugin.ctbId ? upsellPlugin.download : undefined )
					.attr( 'data-nfd-installer-plugin-basename', !upsellPlugin.ctbId ? upsellPlugin.basename : undefined )
					.attr( 'data-nfd-installer-plugin-name', !upsellPlugin.ctbId ? upsellPlugin?.name : undefined )
					.attr( 'data-nfd-installer-pls-provider', !upsellPlugin.ctbId ? upsellPlugin.plsProviderName : undefined )
					.attr( 'data-nfd-installer-pls-slug', !upsellPlugin.ctbId ? upsellPlugin.plsSlug : undefined );

				// Add clickable elem to DOM and trigger click.
				jQuery(document.body).append( clickableElem );
				// Trigger click using vanilla js
				document.querySelector('.nfd-solution-upsell-trigger').click();
			}
		})
	}
})
