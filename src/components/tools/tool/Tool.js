import { Card, Title, Button } from '@newfold/ui-component-library';
import SubscriptionIcon from './../../icons/SubscriptionIcon';

export const Tool = () => {
	return <Card className="nfd-solutions-tool-card nfd-bg-white">
		<Card.Header className="nfd-bg-inherit nfd-bg-transparent nfd-aspect-3/1 nfd-h-auto">
			<SubscriptionIcon/>
		</Card.Header>
		<Card.Content>
			<Title as={'h4'}>
				{ '{{Tool title}}' }
			</Title>
			{ '{{Tool description}}' }
		</Card.Content>
		<Card.Footer>
			<Button>{ '{{Action}}' }</Button>
		</Card.Footer>
	</Card>;
}
