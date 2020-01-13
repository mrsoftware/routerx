import { IStack } from '../models/layout/Stack';
import { IComponent } from '../models/layout/Component';

class Stack implements IStack {
	// id of Stack
	public id: string;

	// children is list of stack children, Componenet and ExternalComponent
	public children: any[] = [];

	constructor(id: string) {
		this.id = id;
	}

	/**
	 * Add new Component to children list
	 *
	 * @param component IComponent of this route
	 * @returns this Stack
	 */
	public addComponent = (component: IComponent) => {
		this.children.push({ component });
		return this;
	};
}


export default Stack;
