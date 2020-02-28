import { ComponentProvider } from '../models/Component';
import { IComponent } from '../models/layout/Component';
import { WixReactNativeNavigation } from '../models/RouterX';

class Component implements IComponent {
	// Name of Component
	public name: string | number;

	// ID of Component
	public id: string | number;

	// TODO: use react-native-navigation Options type
	public options: any;

	// TODO: use component variable to register Component in constructor
	private component: ComponentProvider;

	private concreteComponent?: ComponentProvider;

	constructor(name: string | number, componentProvider: ComponentProvider, concreteComponentProvider?: ComponentProvider, options: any = {}) {
		this.name = name;
		this.id = name;
		this.component = componentProvider;
		this.concreteComponent = concreteComponentProvider;
		this.options = options;
	}

	public register = (wix: WixReactNativeNavigation):ComponentProvider => wix.registerComponent(this.name, this.component, this.concreteComponent);
}


export default Component;
