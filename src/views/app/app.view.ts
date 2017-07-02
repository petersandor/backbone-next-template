import * as Backbone from 'backbone';
import * as _ from 'underscore';

import { IBaseViewOptions } from '../base/base.view';
import HomePageView from '../home-page/home-page.view';
import PageView from '../page/page.view';

class App extends Backbone.View<Backbone.Model> {
	page: PageView;

	constructor(options: IBaseViewOptions = {}) {
		super(_.defaults(options, {el: '#root'}));

		console.log('app constructor');
	}

	showHomePage(): void {
		this.remove();
		this.page = new HomePageView();
		this.render();
	}

	remove(): Backbone.View<Backbone.Model> {
		if (this.page) {
			this.page.remove();
		}

		return this;
	}

	render(): Backbone.View<Backbone.Model> {
		if (this.page) {
			this.page.render();
		}

		return super.render();
	}
}

export default App;
