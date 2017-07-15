import { tagName, template } from 'backbone-decorators';

import ItemsCollection from '../../collections/items/items.collection';
import { IBaseViewOptions } from '../base/base.view';
import ItemsView from '../items/items.view';
import PageView from '../page/page.view';

@tagName('home-page')
@template(require('./home-page.template.hbs'))
class HomePageView extends PageView {

	constructor(options: IBaseViewOptions) {
		super(options);

		this.addSubview(
			new ItemsView({
				collection: new ItemsCollection()
			})
		);
	}

}

export default HomePageView;
