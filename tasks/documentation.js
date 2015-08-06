var gulp = require('gulp');
var exec = require('child_process').exec;
var path = require('path');
var config = require('./config');

module.exports = function() {
    gulp.task('documentation', function () {
        var pathParent = path.join(__dirname,  '../');

        var command = pathParent + 'node_modules/.bin/jsdoc ' + pathParent + config.jsdocPath + ' -r -c ' + pathParent + 'jsdoc.conf.json';

        exec(command)
    });
}