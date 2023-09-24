const router = require('express').Router();
const Question = require('../schema');


router.post('/receive', async (req, res) => {
    try {

        const answers = req.body.data; // answers will look like this {q1:0} or {q1:1} or {q1:2} or {q1:3}

        const question = await Question.findOne({ id: 1 });

        if (answers.q1) {
            question.q1 = [...question.q1, answers.q1];
            await question.save();
        }
        if (answers.q2) {
            question.q2 = [...question.q2, answers.q2];
            await question.save();

        }
        if (answers.q3) {
            question.q3 = [...question.q3, answers.q3];
            await question.save();
        }
        if (answers.q4) {
            question.q4 = [...question.q4, answers.q4];
            await question.save();
        }
        if (answers.q5) {
            question.q5 = [...question.q5, answers.q5];
            await question.save();
        }
        if (answers.q6) {
            question.q6 = [...question.q6, answers.q6];
            await question.save();
        }
        if (answers.q7) {
            question.q7 = [...question.q7, answers.q7];
            await question.save();
        }
        if (answers.q8) {
            question.q8 = [...question.q8, answers.q8];
            await question.save();
        }
        if (answers.q9) {
            question.q9 = [...question.q9, answers.q9];
            await question.save();
        }
        if (answers.q10) {
            question.q10 = [...question.q10, answers.q10];
            await question.save();
        }
        
        res.status(201).send({ message: 'Question added successfully' });
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});

router.get('/send', async (req, res, next) => {
    try {
        const question = await Question.findOne({ id: 1 });

        res.status(200).send(question);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});

module.exports = router;


// await Question.create({
//     q1: [],
//     q2: [],
//     q3: [],
//     q4: [],
//     q5: [],
//     q6: [],
//     q7: [],
//     q8: [],
//     q9: [],
//     q10: []
// });
