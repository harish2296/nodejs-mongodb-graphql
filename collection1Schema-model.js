const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection1Schema = new Schema({
    name: String,
    id: Number,
    status: Boolean,
    mock_data : Object
});

module.exports = mongoose.model('collection1Schema', collection1Schema);