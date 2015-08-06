var winston   = require('winston'),
    config    = require('../config/global');


var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            json: true,
            filename: config.log
        }),
        new winston.transports.Console()
    ],
    exitOnError: false
});

module.exports = logger;