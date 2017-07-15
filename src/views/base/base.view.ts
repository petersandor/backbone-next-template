import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';

export interface IBaseViewOptions extends Backbone.ViewOptions<Backbone.Model> {
	container?: string | JQuery;
}

export class BaseView extends Backbone.View<Backbone.Model> {

	/**
	 * View's parent container selector or JQuery ref
	 * @type {JQuery}
	 * @memberof BaseView
	 */
	public container: JQuery;

	/**
	 * Sets up a template
	 * @protected
	 * @type {HandlebarsTemplateDelegate}
	 * @memberof BaseView
	 */
	protected template: HandlebarsTemplateDelegate;

	/**
	 * Array of subviews
	 * @type {BaseView[]}
	 * @memberof BaseView
	 */
	private _views: BaseView[];

	/**
	 * Getter for a reference to sub-views array
	 * @readonly
	 * @type {BaseView[]}
	 * @memberof BaseView
	 */
	get views(): BaseView[] {
		if (this._views) {
			return this._views;
		} else {
			console.warn('Uninitialized views array');
			return [];
		}
	}

	initialize(options: IBaseViewOptions = {}) {
		super.initialize(options);

		this.container = $(options.container);
		this._views = [];
	}

	/**
	 * Renders the view
	 * @returns {Backbone.View<Backbone.Model>}
	 * @memberof BaseView
	 */
	public render(): Backbone.View<Backbone.Model> {
		let dataSource: Backbone.Model | Backbone.Collection<Backbone.Model>;

		if ('model' in this) {
			dataSource = this.model;
		}

		if ('collection' in this) {
			dataSource = this.collection;
		}

		this.$el.html(
			this.template(dataSource ? dataSource.toJSON() : {})
		);

		// Replace in-memory all the empty component tags
		// with already rendered child views
		// Also known as poor man's web components
		this.views.forEach((view: BaseView) => {
			const viewElementRef: JQuery<HTMLElement> = this.$el.find(view.tagName);

			viewElementRef.replaceWith(view.$el);
			view.setElement(viewElementRef);
		});

		if ('jquery' in this.container && this.container.length) {
			this.container.append(this.$el);
		}

		return super.render();
	}

	/**
	 * Called after the page render only, runs on all child views
	 * @returns {Backbone.View<Backbone.Model>}
	 * @memberof BaseView
	 */
	public afterRender(): Backbone.View<Backbone.Model> {
		this.views.forEach((view: BaseView) => {
			view.afterRender();
		});

		return this;
	}

	/**
	 * Adds a reference to a sub-view
	 * - used for rendering and removing (cleanup)
	 * @param {BaseView} view
	 * @returns {BaseView[]}
	 * @memberof BaseView
	 */
	public addSubview(view: BaseView): BaseView[] {
		if (!this._views) {
			this._views = [];
		}

		this._views.push(view);
		return this._views;
	}

}
