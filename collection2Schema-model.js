const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection2Schema = new Schema({
    name: String,
    id: Number,
    status: Boolean
});

module.exports = mongoose.model('collection2Schema', collection1Schema);