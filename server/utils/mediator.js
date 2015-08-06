var events = require('events');
var EventEmiter = events.EventEmitter;

var Mediator = new EventEmiter();

module.exports = Mediator;

/*
Mediator.on('modules:active', function(param) {
    console.log(param + ' module 1')
});

Mediator.emit('modules:active', 'I am active');

*/