import * as Backbone from 'backbone';
import { tagName, template } from 'backbone-decorators';

import { BaseView } from '../base/base.view';

@tagName('items-list')
@template(require('./items.template.hbs'))
class ItemsView extends BaseView {

}

export default ItemsView;
