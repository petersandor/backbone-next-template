import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';

export default class AppRouter extends Backbone.Router {

	constructor(options: Backbone.RouterOptions = { routes: void 0 }) {
		super(_.defaults(options, {
			routes: {
				'': 'home'
			}
		}));
	}

	private home() {
		console.log('should be called');
	}
}
