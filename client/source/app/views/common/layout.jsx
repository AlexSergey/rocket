var React = require('react');
var Router = require('react-router');

var Header = require('./header');

var RouteHandler = Router.RouteHandler;
/**
 Construct main layout

 @class Layout
 */
module.exports = React.createClass({
    render() {
        return(
            <div id="wrapper">
                <Header />
                <div className="main-block">
                    <div className="main-block-holder">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        )
    }
});