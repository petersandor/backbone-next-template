import * as Backbone from 'backbone';

import ItemsCollection from './items.collection';

describe('ItemsCollection', () => {

	let collection;

	beforeEach(() => {
		collection = new ItemsCollection();
	});

	it('should be created', () => {
		expect(collection).toBeDefined();
	});

});
