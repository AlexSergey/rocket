var React = require('react.backbone');
var Backbone = require('backbone');

var config = require('../../config');

module.exports = React.createBackboneClass({
    getInitialState() {
        return {
            name: '',
            description: 'work description'
        }
    },

    change(e) {
        var data = {};
        data[e.target.dataset.field] = e.target.value;
        this.setState(data);
    },

    send(e) {
        e.preventDefault();

        var Work = Backbone.Model.extend({
            urlRoot: config.getLink('works').link
        });

        var model = new Work({
            name: this.state.name,
            description: this.state.description
        });

        model.save(null, {
            success: function(model, response) {
                this.getCollection().add({
                    _id: response.work._id,
                    name: model.get('name'),
                    description: model.get('description')
                })
            }.bind(this),
            error: function(model, xhr) {
                console.log('fail! ', xhr.responseText)
            }
        });
    },

    render() {
        return(
            <form className="form">
                <p>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.change} data-field="name" placeholder="name" />
                </p>
                <p>
                    <textarea name="" id="" cols="30" rows="10"  onChange={this.change} data-field="description" className="form-control" placeholder={this.state.description}></textarea>
                </p>
                <p>
                    <button className="send btn btn-primary" onClick={this.send}>SEND</button>
                </p>
                <h3>{this.message}</h3>
            </form>
        )
    }
});