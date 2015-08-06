var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var runSequence = require('run-sequence');
var config = require('./config');
var jsValidate = require('gulp-jsvalidate');
var debug = require('gulp-debug');

module.exports = function() {
    gulp.task('jsValidate', function () {
        return gulp.src(config.dist.js.app)
            .pipe(debug())
            .pipe(jsValidate())
    });

    gulp.task('ftp', function() {
        var conn = ftp.create({
            host: config.deploy.host,
            user: config.deploy.user,
            password: config.deploy.password,
            parallel: 10,
            log: gutil.log
        });

        var globs = [
            config.dist.path + '/**'
        ];

        return gulp.src(globs, {base: config.dist.path, buffer: false})
            .pipe(conn.newer(config.deploy.path)) // only upload newer files
            .pipe(conn.dest(config.deploy.path));
    });

    gulp.task('deploy', function() {
        runSequence('jsValidate', ['ftp']);
    });

}