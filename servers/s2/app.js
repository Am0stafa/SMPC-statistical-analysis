const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
const DB= process.env.mongo

mongoose.connect(DB , {
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(con => {
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
