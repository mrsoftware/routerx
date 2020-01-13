import Stack from '../../src/layouts/Stack';
import Component from '../../src/layouts/Component';
import Home from '../helpers/Home';


describe('Stack', () => {
	test('Create new Stack', () => {
		const homeStack = new Stack('HomeStack');
		expect(homeStack).toBeInstanceOf(Stack);
	});

	test('Expect Stack to have id of "HomeStack"', () => {
		const homeStack = new Stack('HomeStack');
		expect(homeStack.id).toBe('HomeStack');
	});

	test('Expect Stack to have childern with length of 0', () => {
		const homeStack = new Stack('HomeStack');
		expect(homeStack.children.length).toBe(0);
	});

	test('Expect Stack to have childern with length of 1', () => {
		const homeStack = new Stack('HomeStack');
		const home = new Component('Home', () => Home);
		homeStack.addComponent(home);
		expect(homeStack.children.length).toBe(1);
	});

	test('Expect Stack to have 1 child with name and id of "Home"', () => {
		const homeStack = new Stack('HomeStack');
		const home = new Component('Home', () => Home);
		homeStack.addComponent(home);
		expect(homeStack.children.length).toBe(1);
		expect(homeStack.children[0].component.name).toBe('Home');
		expect(homeStack.children[0].component.id).toBe('Home');
	});
});
