import { EmptyTools } from './EmptyTools';
import { Tool } from './tool';
import { useFilter } from './../../contexts/FilterContext';
import {
	AdvancedReviewIcon,
	BookingIcon,
	EmailTemplatesIcon,
	GiftCardsIcon,
	MembershipIcon,
	OneClickCheckoutIcon,
	ProductAddonsIcon,
	SenseiIcon,
	SocialLoginIcon,
	SubscriptionIcon,
	WishlistIcon,
	WonderCartIcon,
	YoastPremiumIcon,
	YoastSeoIcon,
} from './../icons';

const toolsIcons = {
	'Memberships': MembershipIcon,
	'Subscriptions': SubscriptionIcon,
	'Social Login': SocialLoginIcon,
	'Yoast SEO': YoastSeoIcon,
	'Yoast WooCommerce SEO': YoastPremiumIcon,
	'Advanced Reviews': AdvancedReviewIcon,
	'Bookings & Appointments': BookingIcon,
	'Custom Email Templates': EmailTemplatesIcon,
	'Gift Cards': GiftCardsIcon,
	'One-Click Checkout': OneClickCheckoutIcon,
	'Product Add-Ons & Extra Options': ProductAddonsIcon,
	'Sensei': SenseiIcon,
	'Wishlists': WishlistIcon,
	'WonderCart': WonderCartIcon
};

const wideCards = [
	'20085485-7185-40fd-89e4-14dbb690aea2', // Advanced Review
	'ad68e506-8c2b-4c0f-a9e3-16623d00041e', // Booking & Appointments
]

function layoutTools( tools ) {
	const layout = [];
	let rowSpaces = 3;
	let row = [];

	const pushRow = () => {
		layout.push( ...row );
		row = [];
		rowSpaces = 3;
	};

	while ( tools.length ) {

		if ( wideCards.includes( tools[ 0 ]?.id ) ) {
			if ( rowSpaces > 1 ) {
				row.push( tools.shift() );
				rowSpaces -= 2;
			} else {
				for ( let i = 0; i < tools.length; i++ ) {
					if ( ! wideCards.includes( tools[ i ]?.id ) ) {
						row.push( ...tools.splice( i, 1 ) );
						rowSpaces -= 1;
						break;
					}
				}
				pushRow();
			}
		} else if ( rowSpaces > 0 ) {
			row.push( tools.shift() );
			rowSpaces -= 1;
		}

		if ( ! rowSpaces ) {
			pushRow();
		}
	}
	pushRow();
	return layout;
}

export const Tools = () => {
	const { category, search } = useFilter();
	let tools = NewfoldSolutions.entitlements
		//.filter( tool => Object.keys( toolsIcons ).includes( tool.name ) )
		.sort( ( a, b ) => {
			const aHasIcon = Object.keys( toolsIcons ).includes( a.name );
			const bHasIcon = Object.keys( toolsIcons ).includes( b.name );

			if ( aHasIcon && ! bHasIcon ) return -1;
			if ( ! aHasIcon && bHasIcon ) return 1;
			return 0;
		} );

	if ( 'all' !== category ) {
		tools = tools.filter( tool => tool?.categorySlug === category );
	}

	if ( search ) {
		tools = tools.filter( tool => tool?.name?.toLowerCase().includes( search.toLowerCase() ) || tool?.plsSlug?.toLowerCase().includes( search.toLowerCase() ) );
	}

	tools = layoutTools( [ ...tools ] );

	return <>
		{ ! tools.length && <EmptyTools/> }
		{
			!! tools.length &&
			<div className="nfd-solutions-tools nfd-grid nfd-gap-4">
				{
					tools.map(
						tool =>
							<Tool
								name={ tool?.name }
								description={ tool.description }
								href={ tool.cta?.url.replace( '{siteUrl}', NewfoldSolutions.siteUrl ) }
								icon={ toolsIcons[ tool?.name ] }
								smallIcon={ ! toolsIcons[ tool?.name ] ? tool.image.primaryImage : null }
								wide={ wideCards.includes( tool?.id ) }
								premium={ tool?.premium }
								popular={ tool?.popular }
								key={ tool?.name }
								isActive={ tool?.isActive }
								plsProvider={ tool?.plsProviderName }
								plsSlug={ tool?.plsSlug }
							/>
					)
				}
			</div>
		}
	</>;
}
