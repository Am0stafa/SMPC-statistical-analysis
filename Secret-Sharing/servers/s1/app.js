const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
const DB= process.env.mongo

mongoose.connect(DB , {
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(con  => {
  console.log("DB is connection successful");
}).catch(err=>{
  console.log(err)
  server.close(()=>{
    process.exit(1)
  })
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// const Question = require('./schema');
// (async function() {
//  await Question.deleteMany({});
// await Question.create({
// id: 1,
// q1: [],
// q2: [],
// q3: [],
// q4: [],
// q5: [],
// q6: [],
// q7: [],
// q8: [],
// q9: [],
// q10: []
// });
//   }());





app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
