var React = require('react.backbone');
var Router = require('react-router');

var ListItem = require('./list.item');

module.exports = React.createBackboneClass({
    mixins: [
        Router.State
    ],

    subscriptions: {
        'set:active': 'setActive'
    },

    getInitialState() {
        return {
            active: this.getParams().workId
        }
    },

    setActive(id) {
        this.setState({
            active: id
        })
    },

    render() {
        return(
            <div>
                <h2>Works List</h2>
                <ul className="list">
                    {this.getCollection().map(function(model, index) {
                        return <ListItem key={index} model={model} collection={this.getCollection()} active={this.state.active} />
                    }.bind(this))}
                </ul>
            </div>
        )
    }
});