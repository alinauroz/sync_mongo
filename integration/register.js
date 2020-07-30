const MongoClient = require('mongodb').MongoClient;

const dbName = 'Clone';
const url = "mongodb+srv://admin:abcd1234@cluster0-9zuvz.mongodb.net";
var connection,db;

//MongoClient.connect(url, function(err, client) {
//    const db = client.db(dbName);
//
//    collection = db.collection('users');
//
//    collection.insert({name: "ali"})
//});

( async () => {
    connection = await MongoClient.connect(url);
    db = await connection.db(dbName);
})()

const save = async data => {
    try {
        let collection = db.collection('users');
        collection.insertOne(data);
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    save
}