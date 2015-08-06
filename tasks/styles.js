var gulp = require('gulp');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var log = require('./log');
var config = require('./config');
var fs = require('fs');
var header  = require('gulp-header');
var connect = require('gulp-connect');
var rename = require("gulp-rename");

module.exports = function() {
    gulp.task('styles', function () {
        fs.readFile(config.copyrightPath, "utf-8", function(err, copy) {
            var test = argv.production === undefined;

            return gulp.src(config.source.styles.mainLess)
                .pipe(gulpif(test, sourcemaps.init()))
                .pipe(plumber({
                    errorHandler: log
                }))
                .pipe(less({
                    paths: config.source.styles.stylesheets
                }))
                .pipe(plumber.stop())
                .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
                .on('error', log)
                .pipe(minifyCSS())
                .pipe(gulpif(test, sourcemaps.write()))
                .pipe(header(copy, config.copyright))
                .pipe(rename(config.dist.name))
                .pipe(gulp.dest(config.dist.css))
                .pipe(connect.reload());
        });
    });
};