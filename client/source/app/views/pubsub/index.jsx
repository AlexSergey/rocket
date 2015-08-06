var React = require('react');

var First = require('./first');
var Second = require('./second');
/**
 Construct Publish Subscriber test view

 @class PubSub
 */
module.exports = React.createClass({
    render() {
        var test = 'subscriptions: {\n' +
            'event:test: testCallback\n' +
        '}';

        return (
            <div>
                <p>The publish subscriber mixin need to swap data between components. This Mediator created use <a href="https://www.npmjs.com/package/wolfy87-eventemitter">EventEmitter module</a> and connect it to React</p>

                <p>Component will be <strong>mounte</strong></p>

                <p>After connect mixin to component, you have access to new methods:</p>

                <ol className="list-num">
                    <li> - <span className="code">on</span> Subscribe event, execute callback</li>
                    <li> - <span className="code">once</span> Subscribe event, execute callback only single</li>
                    <li> - <span className="code">off</span> Unsubscribe</li>
                    <li> - <span className="code">emit</span> Push event</li>
                </ol>

                <p>On component can describe object event - callback, for example:</p>

                <p><code dangerouslySetInnerHTML={{__html: test}}></code></p>
                <hr />
                <h3>Example: </h3>

                <Second />
                <First />
            </div>
        )
    }
});