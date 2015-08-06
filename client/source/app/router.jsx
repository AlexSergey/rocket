var Router = require('react-router');
var React = require('react');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//_common
var App      = require('./views/common/layout.jsx');
var Home     = require('./views/common/home.jsx');

//works
var Works    = require('./views/works/index');
//work
var Work     = require('./views/work/index');

//Publish subscriber layout
var Pubsub   = require('./views/pubsub/index')

//For test components
var Tests   = require('./views/forTests/index');

var routes = (
    <Route handler={App}>
        <DefaultRoute name="home" handler={Home}/>
        <Route name="tests" path="/tests" handler={Tests} />
        <Route name="pubsub" path="/pubsub" handler={Pubsub} />
        <Route name="works" path="/works" handler={Works}>
            <Route name="work" path="/works/:workId" handler={Work} />
        </Route>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});