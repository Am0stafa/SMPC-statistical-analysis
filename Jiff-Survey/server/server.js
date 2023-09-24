const express = require('express');
const bodyParser = require('body-parser');
const jiff = require('jiff');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const SERVER_PORT = 3001;
const MONGO_URL = "mongodb://localhost:27017";
const DB_NAME = "panas";
const COLLECTION_NAME = "responses";

app.use(cors());

let db;
MongoClient.connect(MONGO_URL, (err, client) => {
    if (err) throw err;
    db = client.db(DB_NAME);
});

app.use(bodyParser.json());

const options = { crypto_provider: true };
const mpc_server = jiff.make_jiff('http://localhost:' + SERVER_PORT, options);

app.post('/submit', async (req, res) => {
    const data = req.body;
    await db.collection(COLLECTION_NAME).insertOne(data);
    res.send({ message: "Share saved successfully!" });
});

app.get('/statistics', async (req, res) => {
  // Fetch all the shared data from MongoDB
  const allShares = await db.collection(COLLECTION_NAME).find({}).toArray();

  // Securely compute the mean
  let totalSum = mpc_server.secret_share(0);  // initialize with a zero secret share
  for (let share of allShares) {
      totalSum = mpc_server.sadd(totalSum, share);
  }
  const mean = mpc_server.sdiv(totalSum, allShares.length);

  // Securely compute the frequency table and mode (using a predefined discrete range)
  const freqTable = {};
  let maxCount = mpc_server.secret_share(0);
  let mode = null;

  for (let i = 1; i <= 5; i++) {
      let count = mpc_server.secret_share(0);
      for (let share of allShares) {
          count = mpc_server.sadd(count, mpc_server.seq(share, i));
      }
      freqTable[i] = count;
      if (mpc_server.sgt(count, maxCount)) {
          maxCount = count;
          mode = i;
      }
  }

  // Now, reveal the results to the server (though in a true MPC setup, you might not want to do this)
  const revealedMean = await mpc_server.open(mean);
  const revealedFreqTable = {};
  for (let i = 1; i <= 5; i++) {
      revealedFreqTable[i] = await mpc_server.open(freqTable[i]);
  }

  res.send({
      mean: revealedMean,
      mode: mode,
      frequencyTable: revealedFreqTable
  });
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
