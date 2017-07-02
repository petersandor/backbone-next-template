import * as Backbone from 'backbone';
import * as $ from 'jquery';

export interface IBaseViewOptions extends Backbone.ViewOptions<Backbone.Model> {
	container?: JQuery | string;
}

export class BaseView extends Backbone.View<Backbone.Model> {

	protected template: HandlebarsTemplateDelegate;
	protected views: BaseView[];
	protected container: JQuery | string;

	constructor(options: IBaseViewOptions = {}) {
		super(options);

		if ('container' in options) {
			this.container = options.container;
		}

		this.views = [];
	}

	public render(): Backbone.View<Backbone.Model> {
		let container = this.container as JQuery;

		// Can't use instanceof jQuery :/
		if (typeof container === 'string' || !('jquery' in container)) {
			container = $(container);
		}

		container.append(this.$el);

		return super.render();
	}

}
