var gulp = require('gulp');
var log = require('./log');
var argv = require('yargs').argv;
var config = require('./config');
var watch = require('gulp-chokidar');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
//var browserifyFn = require('./browserify');

module.exports = function() {
    gulp.task('cleanImgs', function() {
        return gulp.src(config.dist.images)
            .on('error', log)
            .pipe(clean());
    });

    gulp.task('cleanFonts', function() {
        return gulp.src(config.dist.fonts)
            .on('error', log)
            .pipe(clean());
    });

    gulp.task('htmlWatch', function() {
        watch(config.source.index, function() {
            gulp.start('jsLibs')
        });
    });

    gulp.task('imagesWatch', function() {
        watch(config.source.images + '**/*', function() {
            runSequence('cleanImgs', ['images']);
        });
    });

    gulp.task('cssWatch', function() {
        watch(config.source.styles.stylesheets + '**/*', function() {
            gulp.start('styles')
        });
    });

    gulp.task('fontsWatch', function() {
        watch(config.source.fonts + '**/*', function() {
            runSequence('cleanFonts', ['fonts']);
        });
    });
}