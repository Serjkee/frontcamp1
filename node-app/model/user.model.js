const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')
const Schema = mongoose.Schema;

// User schema.
let userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema, 'user');
