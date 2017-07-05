import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';

import App from '../../views/app/app.view';
import { IBaseViewOptions } from '../../views/base/base.view';

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
