var React = require('react');

var Pane = React.createClass({
    getInitialState: function(){
        return {
            show: this.props.data.showOnLoad
        };
    },

    toggle: function(){
        this.setState({
            show: !this.state.show
        });
    },

    render: function(){
        var getContent = (function(item){
            return this.state.show ? (
                <div className="accordion-content">
          {item.content}
                </div>
            ) : '';
        }).bind(this);

        var item = this.props.data;

        return (
            <div>
                <div className="accordion-header" onClick={this.toggle}>
          {item.name}
                </div>
        { getContent(item) }
            </div>
        );
    }
});

var Accordion = React.createClass({
    render: function(){
        var panes = [];
        var data = this.props.data || [];

        data.forEach(function(item){
            panes.push(
                <Pane data={item} />
            );
        });

        return (
            <div className="accordion">
        {panes}
            </div>
        );
    }
});

module.exports = Accordion;