var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
/**
 Common header

 @class Header
 */
module.exports = React.createClass({
    render() {
        return(
            <div id="header-frame">
                <header id="header" className="header-bg">
                    <div className="header-holder">
                        <h1 className="logo logo-bg">
                            <Link to="home">
                            </Link>
                        </h1>
                        <div className="btn-wrapper">
                            <div id="example" className="btn btn-primary"><Link to="works">Works</Link></div>
                            <div id="example" className="btn btn-primary"><Link to="pubsub">Publish Subscriber</Link></div>
                            <div id="example" className="btn btn-primary"><Link to="tests">For tests</Link></div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
});