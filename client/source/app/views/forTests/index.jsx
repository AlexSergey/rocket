var React = require('react.backbone');
var Accordion = require('../../components/accordion');

module.exports = React.createBackboneClass({
    getInitialState() {
        return {
            accordion: [{
                name: 'Title 1',
                content: 'Content belongs to title 1',
                showOnLoad: false
            },{
                name: 'Title 2',
                content: 'Content belongs to title 2',
                showOnLoad: true
            }]
        }
    },

    render() {
        return(
            <div>
                <Accordion data={this.state.accordion} />
            </div>
        )
    }
});