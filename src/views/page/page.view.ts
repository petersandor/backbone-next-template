import * as _ from 'underscore';
import { BaseView, IBaseViewOptions } from '../base/base.view';

class PageView extends BaseView {

	constructor(options: IBaseViewOptions = {}) {
		super(_.defaults(options, {
			container: '#root'
		}));
	}

	public remove(): Backbone.View<Backbone.Model> {
		this.views
			.forEach((view: BaseView) => view.remove());

		return super.remove();
	}

	public render(): Backbone.View<Backbone.Model> {
		this.views
			.forEach((view: BaseView) => view.render());

		return super.render();
	}
}

export default PageView;
