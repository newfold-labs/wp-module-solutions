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

export const Tools = () => {
	const { selectedCategory } = useCategory();
	let tools = NewfoldSolutions.entitlements
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
			tools.map(
				tool => <Tool name={ tool?.name } description={ tool.description } href={ tool.cta?.url.replace( '{siteUrl}', NewfoldSolutions.siteUrl ) } icon={ toolsIcons[ tool?.name ] }/>
			)
		}
	</div>;
}
