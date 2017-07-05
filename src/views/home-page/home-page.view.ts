import { template } from 'backbone-decorators';

import { IBaseViewOptions } from '../base/base.view';
import PageView from '../page/page.view';

@template(require('./home-page.template'))
class HomePageView extends PageView {

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
