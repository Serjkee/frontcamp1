const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection("mongodb://localhost/articles");
autoIncrement.initialize(connection);

// Article schema.
let articleSchema = new Schema({
    author: {type: String, required: true},
    description: {type: String, required: true}
});

articleSchema.plugin(autoIncrement.plugin, 'Article');
module.exports = connection.model('Article', articleSchema, 'articles');
