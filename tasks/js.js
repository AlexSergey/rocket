var gulp = require('gulp');
var log  = require('./log');
var argv = require('yargs').argv;
var browserify = require('browserify');
var babelify = require("babelify");
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var config = require('./config');
var fs = require('fs');
var header  = require('gulp-header');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var stripDebug = require('gulp-strip-debug');
var glob = require('glob');

function browserifyFn(files, dest, fn, watch) {
    var scriptBundl;
    fs.readFile(config.copyrightPath, "utf-8", function(err, copy) {
        if (err) {
            console.log(err)
        }

        var bundler = browserify(files, {
            extensions: ['.js', '.jsx'],
            debug: !argv.production,
            cache: {},

            packageCache: {},
            fullPaths: true
        });

        if (!!watch) {
            scriptBundl  = watchify(bundler);
        } else {
            scriptBundl = bundler;
        }

        builder(argv.production, watch);

        function builder(isProd, isWatch) {
            if (isProd) {
                return scriptBundl
                    .transform(babelify)
                    .bundle()
                    .on('error', log)
                    .pipe(source(config.dist.js.appName))
                    .pipe(buffer())
                    .pipe(stripDebug())
                    .pipe(uglify())
                    .pipe(header(copy, config.copyright))
                    .pipe(gulp.dest(dest))
            } else {
                if (isWatch) {
                    return scriptBundl
                        .transform(babelify)
                        .on('update', function () {
                            var updateStart = Date.now();
                            scriptBundl
                                .transform(babelify)
                                .bundle()
                                .on('error', log)
                                .pipe(source(config.dist.js.appName))
                                .pipe(gulp.dest(dest))
                                .pipe(connect.reload());
                            console.log('Updated!', (Date.now() - updateStart) + 'ms');
                        })
                        .bundle()
                        .on('error', log)
                        .pipe(source(config.dist.js.appName))
                        .pipe(gulp.dest(dest))
                        .pipe(connect.reload())
                } else {
                    return scriptBundl
                        .transform(babelify)
                        .bundle()
                        .on('error', log)
                        .pipe(source(config.dist.js.appName))
                        .pipe(gulp.dest(dest))
                }
            }
        }
    });
}

module.exports = function() {
    gulp.task('js', function() {
        browserifyFn(config.source.js.appInit, config.dist.js.path)
    });

    gulp.task('jsWatch', function() {
        browserifyFn(config.source.js.appInit, config.dist.js.path, null, true);
    });

    gulp.task('jsTest', function() {
        var files = glob.sync(config.tests.setup);
        files = files.concat(glob.sync(config.tests.specs));
        browserifyFn(files, config.tests.dist);
    });

    gulp.task('jsTest-watch', function() {
        var files = glob.sync(config.tests.setup);
        files = files.concat(glob.sync(config.tests.specs));
        browserifyFn(files, config.tests.dist, null, true);
    });
};