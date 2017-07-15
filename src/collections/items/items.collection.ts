import * as Backbone from 'backbone';
import { model } from 'backbone-decorators';
import * as _ from 'underscore';

import Item from '../../models/item/item.model';

@model(Item)
class ItemsCollection extends Backbone.Collection<Item> {
	initialize() {
		for (let i = 0; i < 5; i++) {
			this.add(new Item());
		}
	}
}

export default ItemsCollection;
