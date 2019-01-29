const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining schema for document.
let articleSchema = new Schema({
    author: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Article', articleSchema);
