var React = require('react');

module.exports = React.createClass({
    mixins: [
        require('../../mixins/pubsub')
    ],

    subscriptions: {
        'component:say:hello': 'setText'
    },

    getInitialState() {
        return {
            active: false
        }
    },

    setText(data) {
        this.setState(data)
    },

    answer() {
        this.emit('component:say:answer', {
            active: true,
            text: ' - Thank you! I am fine'
        })
    },

    render() {
        var active = this.state.active === true ? <div>
            <h3>{this.state.text}</h3>
            <button className="btn" onClick={this.answer}>Answer !</button>
        </div> : '';

        return (
            <div className="second-comp">
                {active}
            </div>
        )
    }
});