var gutil         = require('gulp-util');

function log(error) {
    console.log([
        '',
        '----------ERROR MESSAGE START----------'.bold.red.underline,
        ('[' + error.name + ' in ' + error.plugin + ']').red.bold.inverse,
        error.message,
        '----------ERROR MESSAGE END----------'.bold.red.underline,
        ''
    ].join('\n'));
    gutil.beep();
}

module.exports = log;