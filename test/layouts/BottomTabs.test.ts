import BottomTabs from '../../src/layouts/BottomTabs';
import Stack from '../../src/layouts/Stack';
import Component from '../../src/layouts/Component';
import Home from '../helpers/Home';


describe('BottomTabs', () => {
	test('Create new BottomTabs', () => {
		const rootBT = new BottomTabs('RootBottomTabs');
		expect(rootBT).toBeInstanceOf(BottomTabs);
	});

	test('Expect BottomTabs to have id of "RootBottomTabs"', () => {
		const rootBT = new BottomTabs('RootBottomTabs');
		expect(rootBT.id).toBe('RootBottomTabs');
	});

	test('Expect BottomTabs to have childern with length 0', () => {
		const rootBT = new BottomTabs('RootBottomTabs');
		expect(rootBT.children.length).toBe(0);
	});

	test('Expect BottomTabs to have 1 child with id of "HomeStack"', () => {
		const home = new Component('Home', () => Home);
		const homeStack = new Stack('HomeStack');
		const rootBT = new BottomTabs('RootBottomTabs');

		homeStack.addComponent(home);
		rootBT.addStack(homeStack);
		expect(rootBT.children.length).toBe(1);
		expect(rootBT.children[0].stack.id).toBe('HomeStack');
	});
});
