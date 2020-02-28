import { IRouterX, WixReactNativeNavigation } from './models/RouterX';
import { IRoute } from './models/Route';

class RouterX implements IRouterX {

	addRoute = (route: IRoute): this => this;

	getRoute = (name: string) => null;

	getRoutes = () => [];
}

export default RouterX;
