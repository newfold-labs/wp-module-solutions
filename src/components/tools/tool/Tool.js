import { __ } from '@wordpress/i18n';
import { Card, Title, Button } from '@newfold/ui-component-library';

export const Tool = ( { name, description = '', premium = false, wide = false, href = '', icon: Icon = null } ) => {
	return <Card className="nfd-solutions-tool-card nfd-bg-white">
		{
			Icon
			&&
			<Card.Header className="nfd-bg-inherit nfd-bg-transparent nfd-aspect-3/1 nfd-h-auto">
				<Icon/>
			</Card.Header>
		}
		<Card.Content>
			<Title as={ 'h4' }>
				{ name }
			</Title>
			{ description }
		</Card.Content>
		<Card.Footer>
			<Button as={ 'a' } href={ href }>{ premium ? __( 'Get it', 'wp-module-solutions' ) : __( 'Manage', 'wp-module-solutions' ) }</Button>
		</Card.Footer>
	</Card>;
}
