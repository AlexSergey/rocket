var React = require('react');
var Router = require('react-router');

/**
 Construct Work layout

 @class Work

 */
module.exports = React.createBackboneClass({
    mixins: [
        Router.Navigation
    ],

    setName(e) {
        this.getModel().set('name', e.target.value)
    },

    update(e) {
        e.preventDefault();

        this.getModel().save({}, {
            success: function () {
                console.log("The model has been updated to the server");
            },
            error: function () {
                console.log("Something went wrong while updating the model");
            }
        })
    },

    render() {
        if (this.props.params.workId === this.getModel().get('_id')) {
            return (
                <div>
                    <form>
                        <input type="text" className="form-control" value={this.getModel().get('name')} onChange={this.setName} />
                        <button onClick={this.update} className="btn btn-primary">Update</button>
                    </form>
                </div>
            )
        } else {
            return false;
        }
    }
});