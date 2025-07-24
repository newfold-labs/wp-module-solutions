import './style.scss';
import domReady from '@wordpress/dom-ready';

domReady( () => {

	const productTypeSelect = jQuery( '#product-type' );
	if ( productTypeSelect ) {

	 	// Re-organize select.
		const currentValue = productTypeSelect.val();
		const premiumPlugins = NewfoldSolutionsUpsell || [];

		let options = [];

		// Default values.
		for ( let option of productTypeSelect.find('option') ) {
			options.push( new Option( option.text, option.value, currentValue === option.value ) )
		}

		// Add premium values.
		for ( let plugin of premiumPlugins ) {
			options.push( new Option( plugin.name, plugin.basename ) );
		}

		productTypeSelect.html(options);

		// Apply selectWoo.
		productTypeSelect.selectWoo({
			minimumResultsForSearch: Infinity,
			templateResult: (state) => {
				const premiumPlugin = premiumPlugins.find( plugin => state.id === plugin.basename );

				return premiumPlugin ? jQuery( '<span>' + state.text + '<span class="premium-plugin-icon"></span></span>' ) : state.text;
			}
		});

		// Fix product data box.
		productTypeSelect.next('.select2').on( 'click', (e) => e.stopPropagation() );

		// Open CTB
		productTypeSelect.on( 'select2:selecting', (e) => {

			const premiumPlugin = premiumPlugins.find( plugin => e.params.args.data.id === plugin.basename );

			if ( premiumPlugin ) {
				e.preventDefault();
				e.stopPropagation();

				let elem = jQuery( `<div data-ctb-id="${premiumPlugin.ctbId}"></div>` );

				jQuery(document.body).append( elem );
				elem.click();
			}
		})
	}
})


