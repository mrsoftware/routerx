import Route from '../src/Route';
import BottomTabs from '../src/layouts/BottomTabs';
import Stack from '../src/layouts/Stack';
import Component from '../src/layouts/Component';
import Home from './helpers/Home';


describe('Route', () => {
	test('Create new Route', () => {
		const mainRoute = new Route('MainRoute');
		expect(mainRoute).toBeInstanceOf(Route);
	});

	test('Expect Route to have name of "MainRoute" and then "GuestًRoute"', () => {
		const mainRoute = new Route('MainRoute');
		expect(mainRoute.getName()).toBe('MainRoute');
		mainRoute.setName('GuestًRoute');
		expect(mainRoute.getName()).toBe('GuestًRoute');
	});

	test('Create new Route Tree', () => {
		const home = new Component('Home', () => Home, undefined, { bottomTab: { icon: 'home' } });
		const homeStack = new Stack('HomeStack');
		const rootBT = new BottomTabs('RootBottomTabs');
		const mainRoute = new Route('MainRoute');

		homeStack.addComponent(home);
		rootBT.addStack(homeStack);

		mainRoute.addBottomTabs(rootBT);

		const tree = {
			bottomTabs: {
				id: 'RootBottomTabs',
				children: [
					{
						stack: {
							id: 'HomeStack',
							children: [
								{
									component: {
										id: 'Home',
										name: 'Home',
										options: {
											bottomTab: {
												icon: 'home',
											},
										},
									},
								},
							],
						},
					},
				],
			},
		};

		expect(mainRoute.root).toMatchObject(tree);
	});
});
