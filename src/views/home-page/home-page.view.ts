import { tagName, template } from 'backbone-decorators';
import * as _ from 'underscore';

import ItemsCollection from '../../collections/items/items.collection';
import { IBaseViewOptions } from '../base/base.view';
import ItemsView from '../items/items.view';
import PageView from '../page/page.view';
// Have to use require for now to avoid type checking by at-loader
// 1) first run compilation fail, generates the CSS type definitions file
// 2) second run compiles successfully since it detects the definitions
// import * as styles from './home-page.styles.css';
const styles = require('./home-page.styles.css');

@tagName('home-page')
@template(require('./home-page.template.hbs'))
class HomePageView extends PageView {

	constructor(options: IBaseViewOptions) {
		super(_.extend(options, { className: styles.pageContainer }));

		this.addSubview(
			new ItemsView({
				collection: new ItemsCollection()
			})
		);
	}

}

export default HomePageView;
