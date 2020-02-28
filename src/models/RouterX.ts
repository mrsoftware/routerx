import { IRoute } from './Route';
import Route from '../Route';
import { ComponentProvider } from './Component';
import { LayoutRoot, Layout } from './Layout';
import { Options } from './Options';

export type RouterX = {
	name: string;
};

export interface IRouterX {
	addRoute: (route: IRoute) => this
	getRoute: (name: string) => Route | null
	getRoutes: () => Route[]
}

export interface WixReactNativeNavigation {
	/**
	 * Every navigation component in your app must be registered with a unique name.
	 * The component itself is a traditional React component extending React.Component.
	 */
	registerComponent(componentName: string | number, componentProvider: ComponentProvider, concreteComponentProvider?: ComponentProvider): ComponentProvider;
	/**
	 * Reset the app to a new layout
	 */
	setRoot(layout: LayoutRoot): Promise<any>;
	/**
	 * Set default options to all screens. Useful for declaring a consistent style across the app.
	 */
	setDefaultOptions(options: Options): void;
	/**
	 * Change a component's navigation options
	 */
	mergeOptions(componentId: string, options: Options): void;
	/**
	 * Update a mounted component's props
	 */
	updateProps(componentId: string, props: object): void;
	/**
	 * Show a screen as a modal.
	 */
	showModal<P>(layout: Layout<P>): Promise<any>;
	/**
	 * Dismiss a modal by componentId. The dismissed modal can be anywhere in the stack.
	 */
	dismissModal(componentId: string, mergeOptions?: Options): Promise<any>;
	/**
	 * Dismiss all Modals
	 */
	dismissAllModals(mergeOptions?: Options): Promise<any>;
	/**
	 * Push a new layout into this screen's navigation stack.
	 */
	push<P>(componentId: string, layout: Layout<P>): Promise<any>;
	/**
	 * Pop a component from the stack, regardless of it's position.
	 */
	pop(componentId: string, mergeOptions?: Options): Promise<any>;
	/**
	 * Pop the stack to a given component
	 */
	popTo(componentId: string, mergeOptions?: Options): Promise<any>;
	/**
	 * Pop the component's stack to root.
	 */
	popToRoot(componentId: string, mergeOptions?: Options): Promise<any>;
	/**
	 * Sets new root component to stack.
	 */
	setStackRoot<P>(componentId: string, layout: Layout<P> | Array<Layout<P>>): Promise<any>;
	/**
	 * Show overlay on top of the entire app
	 */
	showOverlay<P>(layout: Layout<P>): Promise<any>;
	/**
	 * dismiss overlay by componentId
	 */
	dismissOverlay(componentId: string): Promise<any>;
	/**
	 * Resolves arguments passed on launch
	 */
	getLaunchArgs(): Promise<any>;
}
