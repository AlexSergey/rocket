var path     = require('path'),
    env      = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    rootPath = path.normalize(__dirname + '/../../');

function getConfig() {
    return {
        development: {
            appFolder: rootPath + '/client/development',
            log      : rootPath + '/server/log/log.text',
            db       : 'mongodb://localhost/works',
            rootPath : rootPath,
            port     : process.env.PORT || 8000
        },
        production: {
            appFolder: rootPath + '/client/production',
            log      : rootPath + '/server/log/log.text',
            db       : 'mongodb://localhost/works',
            rootPath : rootPath,
            port     : process.env.PORT || 8000
        }
    }
}

module.exports = getConfig()[env];