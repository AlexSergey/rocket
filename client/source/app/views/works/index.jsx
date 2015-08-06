var React = require('react.backbone');

var List = require('./list');
var ListManager = require('./list.manager');

var config = require('../../config');

var WorkModel = require('../../models/works/model')({
    urlRoot: config.getLink('works').link,
    idAttribute: config.getLink('works').param
});

var WorksCollection = require('../../models/works/collection')({
    url: config.getLink('works').link,
    model: WorkModel
});
/**
 Construct Works layout

 @class Works

 */
module.exports = React.createBackboneClass({
    getDefaultProps() {
        return {
            collection: new WorksCollection()
        }
    },

    componentWillMount() {
        this.getCollection().fetch();
    },

    render() {
        var list = this.getCollection().length > 0 ? <div>
            <List collection={this.getCollection()} />
        </div> : '';

        return(
            <div id="content">
                {list}
                <ListManager collection={this.getCollection()} />
            </div>
        )
    }
});