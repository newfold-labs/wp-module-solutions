import { Tool } from './tool';
import { useCategory } from './../../contexts/CategoryContext';
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

		if ( tools[ 0 ]?.wide ) {
			if ( rowSpaces > 1 ) {
				row.push( tools.shift() );
				rowSpaces -= 2;
			} else {
				for ( let i = 0; i < tools.length; i++ ) {
					if ( ! tools[ i ]?.wide ) {
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
	const { selectedCategory } = useCategory();
	let tools = NewfoldSolutions.entitlements
		//.filter( tool => Object.keys( toolsIcons ).includes( tool.name ) )
		.sort( ( a, b ) => {
			const aHasIcon = Object.keys( toolsIcons ).includes( a.name );
			const bHasIcon = Object.keys( toolsIcons ).includes( b.name );

			if ( aHasIcon && ! bHasIcon ) return -1;
			if ( ! aHasIcon && bHasIcon ) return 1;
			return 0;
		} );

	if ( 'all' !== selectedCategory ) {
		tools = tools.filter( tool => tool.category === selectedCategory );
	}

	return <div className="nfd-solutions-tools nfd-grid nfd-gap-4">
		{
			layoutTools( [ ...tools ] ).map(
				tool =>
					<Tool
						name={ tool?.name }
						description={ tool.description }
						href={ tool.cta?.url.replace( '{siteUrl}', NewfoldSolutions.siteUrl ) }
						icon={ toolsIcons[ tool?.name ] }
						wide={ tool?.wide }
						premium={tool?.premium}
						popular={tool?.popular}
						key={ tool?.name }
					/>
			)
		}
	</div>;
}
