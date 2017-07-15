import * as Backbone from 'backbone';
// import { route } from 'backbone-decorators';
import * as $ from 'jquery';
import * as _ from 'underscore';

import App from '../../views/app/app.view';

// @route('home')
class AppRouter extends Backbone.Router {

	application: App;

	constructor(options: Backbone.RouterOptions = { routes: void 0 }) {
		super(_.defaults(options, {
			routes: {
				'': 'home'
			}
		}));
	}

	initialize(options: Backbone.RouterOptions): void {
		this.application = new App();
	}

	private home() {
		this.application.showHomePage();
	}
}

export default AppRouter;
