import * as Backbone from 'backbone';

import ItemModel from './item.model';

describe('ItemModel', () => {

	let model;

	beforeEach(() => {
		model = new ItemModel();
	});

	it('should be created', () => {
		expect(model).toBeDefined();
	});

});
