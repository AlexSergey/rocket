var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    shortId  = require('shortid');

var WorksSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortId.generate
    },
    name: String,
    description: String
}, {_id: false});

module.exports = mongoose.model('Works', WorksSchema);