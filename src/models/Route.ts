import { IBootomTabs } from './layout/BottomTabs';

export interface IRoute {
	addBottomTabs: (bottomTabs: IBootomTabs) => this
}
