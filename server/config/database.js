var db     = require('mongoose'),
    config = require('./global'),
    logger = require('../utils/logger');

db.connect(config.db, function(err) {
    if (err) {
        console.log('Couldn\'t connect to MongoDB!'.red);
        logger.log('info', 'Couldn\'t connect to MongoDB!');
    } else {
        console.log('Connect to MongoDB!'.green);
    }
});

module.exports = db;