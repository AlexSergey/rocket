var works = require('./controllers/works'),
    work  = require('./controllers/work');

module.exports = function(router) {
    router.route('/api/works')
        .post(works.addWork)
        .get(works.getAllWorks);

    router.route('/api/works/:work_id')
        .get(work.getWork)
        .delete(work.deleteWork)
        .put(work.updateWork);

    router.route('/api/throwError')
        .get(function(req, res) {
            res.status(500).send({ error: 'GET error' });
        })
        .post(function(req, res) {
            res.status(500).send({ error: 'POST error' });
        })
        .delete(function(req, res) {
            res.status(500).send({ error: 'DELETE error' });
        })
        .put(function(req, res) {
            res.status(500).send({ error: 'PUT error' });
        })
};