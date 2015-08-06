var Work = require('../models/works');

var WorkController = {
    getWork: function(req, res) {
        Work
            .findById(req.params.work_id)
            .exec()
            .on('error', function(err) {
                if (err) {
                    res.send(err);
                }
            })
            .then(function(data) {
                res.json(data)
            });
    },

    deleteWork: function(req, res) {
        console.log(req.params)
        Work.findOneAndRemove({
            _id: req.params.work_id
        }, function(err) {
            if (err) {
                res.send(err);
            }

            res.json({
                message: 'Successfully deleted'
            });
        });
    },

    updateWork: function(req, res) {
        Work.findOneAndUpdate(
            {
                _id: req.params.work_id
            },
            {
                name: req.body.name,
                description: req.body.description
            },
            function(err) {
                if (err) {
                    res.send(err);
                }

                res.json({
                    message: 'Work updated!'
                });
            }
        );
    }
}

module.exports = WorkController;