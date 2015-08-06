var gulp = require('gulp');
var log  = require('./log');
var argv = require('yargs').argv;
var config  = require('./config');
var connect = require('gulp-connect');

module.exports = function() {
    gulp.task('images', function() {
        gulp.src(config.source.images + '**/*', {base: config.images})
            .pipe(gulp.dest(config.dist.images))
            .pipe(connect.reload());
    });

    gulp.task('fonts', function() {
        gulp.src(config.source.fonts + '**/*', {base: config.fonts})
            .pipe(gulp.dest(config.dist.fonts))
            .pipe(connect.reload());
    });


    gulp.task('htmlCopy', function() {
        gulp.src(config.source.index)
            .pipe(gulp.dest(config.dist.path));
    });
}