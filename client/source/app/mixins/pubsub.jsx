var EventEmitter = require('wolfy87-eventemitter');
var _ = require('lodash');

var mediator = new EventEmitter();

/**
 * In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, published messages are characterized into classes, without knowledge of what, if any, subscribers there may be. Similarly, subscribers express interest in one or more classes, and only receive messages that are of interest, without knowledge of what, if any, publishers there are.
 * @module PublishSubscriber
 * @example
 * React.createClass({
 *     mixins: [
 *         pubsub
 *     ],
 *     subscriptions: {
 *         'someEvent:event1': 'callbackWillBeRun'
 *     },
 *
 *     callbackWillBeRun: function() {
 *         ...
 *     }
 *     ...
 * })
 * */
module.exports = {
    on:   mediator.on.bind(mediator),
    /** Subscription on some event and run callback only one. */
    once: mediator.once.bind(mediator),
    /** Unsubscription event. */
    off:  mediator.off.bind(mediator),
    /** Publish event and set data. */
    emit: mediator.emit.bind(mediator),

    componentDidMount: function () {
        for (var sub in this.subscriptions) {
            if (_.isFunction(this[this.subscriptions[sub]])) {
                mediator.addListener(sub, this[this.subscriptions[sub]]);
            }
        }
    },

    componentWillUnmount: function () {
        for (var sub in this.subscriptions) {
            if (_.isFunction(this[this.subscriptions[sub]])) {
                mediator.removeListener(sub, this[this.subscriptions[sub]]);
            }
        }
    }
}