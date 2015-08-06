var gulp          = require('gulp');
var connect       = require('gulp-connect');
var open          = require('gulp-open');
var log = require('./log');
var argv = require('yargs').argv;
var config = require('./config');


module.exports = function() {
    gulp.task('webserver', function() {
        connect.server({
            root: [config.dist.path, './'],
            livereload: true,
            port: config.port,
            middleware: function(connect, opt) {
                return [ require('connect-history-api-fallback') ];
            }
        });
    });

    gulp.task('open', function(){
        var options = {
            url: config.host + ':' + config.port + '/',
            app: "chrome"
        };
        gulp.src(config.dist.index)
            .pipe(open("", options));
    });

    gulp.task('server', function(cb) {
        gulp.start('webserver', 'open');
    });
}