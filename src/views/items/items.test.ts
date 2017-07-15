import * as Backbone from 'backbone';

import ItemsView from './items.view';

describe('ItemsView view', () => {

	let view;

	beforeEach(() => {
		view = new ItemsView({
			collection: new Backbone.Collection()
		});
	});

	it('should create', () => {
		expect(view).toBeDefined();
	});

});
