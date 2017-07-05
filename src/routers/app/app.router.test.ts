import * as Backbone from 'backbone';

import App from '../../views/app/app.view';
import AppRouter from './app.router';

describe('Application router', () => {

	let router: AppRouter;
	let homeRouteSpy: jest.SpyInstance<any>;

	beforeAll(() => {
		router = new AppRouter();
		homeRouteSpy = jest.spyOn(router.application, 'showHomePage');

		Backbone.history.start({pushState: true, root: '/'});
	});

	it('should contain reference to main Application view', () => {
		expect(router.application).toBeInstanceOf(App);
	});

	it('should have route config for home page', () => {
		expect(router.routes['']).toContain('home');
	});

	it('should show home page by default', () => {
		expect(homeRouteSpy).toHaveBeenCalled();
	});

});
