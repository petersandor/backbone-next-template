import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as $ from 'jquery';
import * as _ from 'underscore';

import AppRouter from './routers/app/app.router';

// 3rd party stylesheets
import '../node_modules/material-design-lite/material.min.css';

const historyOptions: Backbone.HistoryOptions = {
	pushState: true,
	root: '/'
};

const router = new AppRouter();

Backbone.history.start(historyOptions);
