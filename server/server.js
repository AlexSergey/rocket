var express = require('express'),
    colors  = require('colors'),
    http    = require('http'),
    debug   = require('debug')('! node-express-rest:server'),
    logger  = require('./utils/logger'),

    app    = express(),
    router = express.Router(),

    config = require('./config/global'),
    db     = require('./config/database');

/////////////////////////////////////////////////////
require('./config/app')(app, router);

require('./config/router')(router);

require('./router')(router);
/////////////////////////////////////////////////////

var server = http.createServer(app);

server.listen(parseInt(config.port));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.log('error', error);
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            logger.log('error', bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            logger.log('error', bind + ' requires elevated privileges');
            process.exit(1);
            break;
        default:
            logger.log('error', error);
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    debug('Listening on ' + bind);
    logger.log('info', 'server started');
}