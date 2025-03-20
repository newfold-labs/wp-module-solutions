import { Tool } from './tool';

export const Tools = () => {
	return <div className="nfd-grid nfd-grid-cols-[repeat(auto-fit,minmax(200px,1fr))] nfd-gap-4">
		<Tool/>
		<Tool/>
		<Tool/>
	</div>;
}
