var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var config = require('./config');
var stylish = require('jshint-stylish');

module.exports = function() {
    gulp.task('jshint', function () {
        return gulp.src(config.source.appPath + '**/*.jsx')
            .pipe(jshint({
                lookup: true,
                linter: require('jshint-jsx').JSXHINT
            }))
            .pipe(jshint.reporter(stylish));
    });
}