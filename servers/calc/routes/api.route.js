const router = require('express').Router();
const Question = require('../schema');
const axios = require('axios');

router.get('/collect', async (req, res) => {
    // in this endpoint i want to all the data from s1, s2, s3, s4, s5 from /api/send endpoint then append each answer to my database

    try {
        const servers = ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003', 'http://localhost:3004', 'http://localhost:3005'];

        const promises = servers.map(server => axios.get(`${server}/api/send`));

        const responses = await Promise.all(promises);

        const data = responses.map(response => response.data);

        let q1 = [];
        let q2 = [];
        let q3 = [];
        let q4 = [];
        let q5 = [];
        let q6 = [];
        let q7 = [];
        let q8 = [];
        let q9 = [];
        let q10 = [];

        data.forEach(question => {
            q1.push(...question.q1);
            q2.push(...question.q2);
            q3.push(...question.q3);
            q4.push(...question.q4);
            q5.push(...question.q5);
            q6.push(...question.q6);
            q7.push(...question.q7);
            q8.push(...question.q8);
            q9.push(...question.q9);
            q10.push(...question.q10);
        });


        const question = await Question.findOne({id: 1});

        question.q1 = q1;
        question.q2 = q2;
        question.q3 = q3;
        question.q4 = q4;
        question.q5 = q5;
        question.q6 = q6;
        question.q7 = q7;
        question.q8 = q8;
        question.q9 = q9;
        question.q10 = q10;

        await question.save();

        const question2 = await Question.findOne({id: 1});

        const frequencies = [];

        for (let i = 1; i <= 10; i++) {
            const frequency = calculateFrequency(question2[`q${i}`]);
            frequencies.push(frequency);
        }




        return res.status(200).json({ message: 'success', data: frequencies });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


});


const calculateFrequency = (arr) => {
    const frequency = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    arr.forEach(item => {
        frequency[item]++;
    }
    );

    const frequencyArr = Object.values(frequency);
    return frequencyArr

}

module.exports = router;
