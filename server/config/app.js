var bodyParser = require('body-parser'),
    express = require('express'),
    config     = require('./global'),
    ejsRender  = require('ejs').renderFile;

module.exports = function(app, router) {
    //Set static dir to return views
    app.use(express.static(config.appFolder));
    app.set('views',       config.appFolder);
    app.engine('html', ejsRender);

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/', router);

    //Always get index.html
    app.get('*', function(req, res){
        res.render('index.html')
    });
}