import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as $ from 'jquery';
import * as _ from 'underscore';

import AppRouter from './routers/app.router';

const historyOptions: Backbone.HistoryOptions = {
	pushState: true,
	root: '/'
};

const router = new AppRouter();

Backbone.history.start(historyOptions);
