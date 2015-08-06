var jsdom = require('jsdom').jsdom;


global.document = jsdom();
global.window = document.parentWindow;
global.navigator = window.navigator;
