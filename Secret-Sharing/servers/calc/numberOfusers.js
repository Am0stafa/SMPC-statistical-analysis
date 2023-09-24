//schema to keep track of the number of users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numberOfUsersSchema = new Schema({
    id: Number,
    numberOfUsers: Number
});

const numberOfUsers = mongoose.model('numberOfUsers', numberOfUsersSchema);

module.exports = numberOfUsers;