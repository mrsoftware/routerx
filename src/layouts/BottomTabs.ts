import { IBootomTabs } from '../models/layout/BottomTabs';
import { IStack } from '../models/layout/Stack';

class BottomTabs implements IBootomTabs {
	// Id of BottomTabs
	public id: string;

	// List of layout that is children of this BottomTabs
	public children: any[] = [];

	constructor(id: string) {
		this.id = id;
	}

	/**
	 * Add new Stack as children to BottomTabs
	 *
	 * @param stack IStack of this route
	 * @returns this BottomTabs
	 */
	public addStack = (stack: IStack) => {
		this.children.push({ stack });
		return this;
	};
}

export default BottomTabs;
