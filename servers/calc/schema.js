
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: Number,
    q1:[Number],
    q2:[Number],
    q3:[Number],
    q4:[Number],
    q5:[Number],
    q6:[Number],
    q7:[Number],
    q8:[Number],
    q9:[Number],
    q10:[Number]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;