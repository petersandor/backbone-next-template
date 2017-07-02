import { IBaseViewOptions } from '../base/base.view';
import PageView from '../page/page.view';

class HomePageView extends PageView {

	template: HandlebarsTemplateDelegate = require('./home-page.template');

	constructor(options: IBaseViewOptions = {
		className: 'page',
		id: 'home',
		tagName: 'home-page'
	}) {
		super(options);

		this.$el.append(this.template({}));
	}

	initialize(options: IBaseViewOptions) {
		console.log('home page init');
	}

}

export default HomePageView;
