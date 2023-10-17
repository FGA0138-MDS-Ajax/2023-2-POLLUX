const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb+srv://dev:nic12345@cluster0.jmqx3ny.mongodb.net/';
const DB_NAME = 'banco';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
