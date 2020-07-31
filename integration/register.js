const MongoClient = require('mongodb').MongoClient;

const dbName = 'Clone';
const url = "mongodb+srv://atlasadmin1:4Smash@mongoec2.chkg1.mongodb.net/"
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
    console.log("connected")
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