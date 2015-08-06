var React = require('react');

module.exports = React.createClass({
    mixins: [
        require('../../mixins/pubsub')
    ],

    subscriptions: {
        'component:say:answer': 'setText'
    },

    getInitialState() {
        return {
            data: '',
            active: false
        }
    },

    sayHello() {
        this.emit('component:say:hello', {
            active: true,
            text: ' - Hello! I am first component. How are you ?'
        })
    },

    setText(data) {
        this.setState(data)
    },

    render() {
        var active = this.state.active === true ? <div>
            <h3>{this.state.text}</h3>
        </div> : '';

        return (
            <div className="first-comp">
                <button  className="btn" onClick={this.sayHello}>Say hello</button>
                {active}
            </div>
        )
    }
});