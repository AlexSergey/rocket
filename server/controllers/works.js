var Work = require('../models/works');

function getAllWorks(req, res) {

}

var WorkController = {
    addWork: function(req, res) {
        Work
            .create({
                name: req.body.name,
                description: req.body.description
            })
            .on('error', function(err) {
                if (err) {
                    res.send(err);
                }
            })
            .then(function (work) {
                res.json({
                    message: 'Successfully added',
                    work: {
                        _id: work._id,
                        name: work.name,
                        description: work.description,
                    }
                });
            })
    },

    getAllWorks: function(req, res) {
        Work
            .find()
            .exec()
            .on('error', function(err) {
                if (err) {
                    res.send(err);
                }
            })
            .then(function(data) {
                res.json(data);
            })
    }
}

module.exports = WorkController;