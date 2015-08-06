/*
 * For source
 * */
var jsdocPath = 'client/source/app/';
var source = './client/source/';
var appPath = source + 'app/';
var appInit = appPath + 'application.jsx';
var assets = source + 'assets/';
var imagesSource = assets + 'images/';
var fontsSource = assets + 'fonts/';
var stylesheets = assets + 'stylesheets/';
var mainLess = stylesheets + '_include.less';

/*
* For dist
* */
var dist = './client/dist/';
var distCss = dist + 'css/';
var cssFile = 'all.css';
var distJs = dist + 'js/';
var templatesName = 'templates.js';
var appName = 'application.js';
var app = distJs + appName;
var templates = distJs + templatesName;
var imagesDist = dist + 'images/';
var fontsDist = dist + 'fonts/';

var copyrightFile = './copyright.txt';
var htmlFile = 'index.html';

var tests = './tests/';
var testsSetup = tests + 'setup.js';
var testsSpecs = tests + 'specs/**/*.js';
var testsDist = tests + 'dist/';

var config = {
    source: {
        appPath: appPath,
        index: source + htmlFile,
        styles: {
            stylesheets: stylesheets,
            mainLess: mainLess
        },
        js: {
            path: appPath,
            appInit: appInit
        },
        images: imagesSource,
        fonts: fontsSource
    },

    dist: {
        path: dist,
        css: distCss,
        index: dist + htmlFile,
        name: cssFile,
        js: {
            templatesName: templatesName,
            path: distJs,
            templates: templates,
            app: app,
            appName: appName
        },
        images: imagesDist,
        fonts: fontsDist
    },

    copyrightPath: copyrightFile,

    copyright: {
        name: 'Rocket React 1.0',
        url: 'https://github.com/AlexSergey/rocket',
        year: 2015,
        company: 'http://gooddev.org/'
    },

    deploy: {
        host: '',
        user: '',
        password: '',
        path: 'gooddev.org/www/REACT'
    },

    host: 'http://localhost',
    port: 3000,

    jsdocPath: jsdocPath,

    tests: {
        setup: testsSetup,
        specs: testsSpecs,
        dist: testsDist
    }
};

module.exports = config;