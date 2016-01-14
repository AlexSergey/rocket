var gulp = require('gulp');
var colors = require('colors');

require('./tasks/js')();
require('./tasks/styles')();
require('./tasks/watch')();
require('./tasks/assets')();
require('./tasks/server')();

require('./tasks/documentation')();

require('./tasks/lint')();

require('./tasks/deploy')();

gulp.task('b', [
    'htmlCopy',
    'js',
    'styles',
    'images',
    'fonts'
]);

gulp.task('w', [
    'server',
    'cssWatch',
    'jsWatch',
    'imagesWatch',
    'fontsWatch'
]);

gulp.task('test', [
    'jsTest'
]);

gulp.task('test-w', [
    'jsTest-watch'
]);

gulp.task('doc', [
    'documentation'
]);

gulp.task('lint', [
    'jshint'
]);

gulp.task('publish', [
    'deploy'
]);