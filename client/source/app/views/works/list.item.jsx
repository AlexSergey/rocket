var React = require('react.backbone');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;

module.exports = React.createBackboneClass({
    mixins: [
        Router.Navigation,
        require('../../mixins/pubsub')
    ],

    deleteItem(e) {
        e.preventDefault();
        this.getModel().destroy()
    },

    goTo(e) {
        e.preventDefault();
        this.emit('set:active', this.getModel().get("_id"));
        this.transitionTo('/works/' + this.getModel().get("_id"));
    },

    render() {
        return(
            <li className="item">
                <a href="#" className="bg-primary work-name" onClick={this.goTo}>{this.getModel().get('name')}</a>
                <a onClick={this.deleteItem} className="delete btn btn-danger">DELETE</a>
                <img src={'http://lorempixel.com/400/200/technics/'} />
                <RouteHandler model={this.getModel()} />
            </li>
        )
    }
});