import Component from '../../src/layouts/Component';
import Home from '../helpers/Home';

describe('Component', () => {
	test('Create new Component', () => {
		const home = new Component('Home', () => Home);
		expect(home).toBeInstanceOf(Component);
	});

	test('Expect component to have name and id of "Home"', () => {
		const home = new Component('Home', () => home);
		expect(home.name).toBe('Home');
		expect(home.id).toBe('Home');
	});

	test('Expect to options works', () => {
		const options = { bottomTab: { icon: 'home' } };
		const home = new Component('Home', () => home, undefined, options);
		expect(home.options).toBe(options);
	});
});
