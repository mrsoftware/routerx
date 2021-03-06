import { IRoute } from './models/Route';
import { IBootomTabs } from './models/layout/BottomTabs';
import { IStack } from './models/layout/Stack';

class Route implements IRoute {
	// Name of Route
	private name: string;

	// root contain tree structure of a route
	public root: any = {};

	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Change name of this route
	 * @param name name for this route
	 */
	public setName = (name: string): void => {
		this.name = name;
	};

	/**
	 * Get name of this route
	 *
	 * @returns name of this route
	 */
	public getName = (): string => this.name;

	/**
	 * Add new BottomTabs to Tree
	 *
	 * @param bootomTabs IBootomTabs of this route
	 * @returns this Route
	 */
	public addBottomTabs = (bottomTabs: IBootomTabs): this => {
		this.root = { ...this.root, bottomTabs };
		return this;
	};

	/**
	 * Add new Stack to Tree
	 *
	 * @param stack IStack
	 * @returns this Route
	 */
	public addStack = (stack: IStack): this => {
		this.root = { ...this.root, stack };
		return this;
	};
}

export default Route;
