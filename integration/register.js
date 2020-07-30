const MongoClient = require('mongodb').MongoClient;

const dbName = 'Clone';

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    //client.close();
  });