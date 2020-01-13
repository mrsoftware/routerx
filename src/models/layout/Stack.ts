import { IComponent } from './Component';

export interface IStack {
	id: string,
	addComponent: (conponent: IComponent) => this
}
