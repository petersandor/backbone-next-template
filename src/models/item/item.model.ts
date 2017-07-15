import * as Backbone from 'backbone';
import { defaults } from 'backbone-decorators';
import * as _ from 'underscore';

@defaults({
	text: 'Item'
})
class ItemModel extends Backbone.Model {

}

export default ItemModel;
