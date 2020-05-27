const express = require('express')
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0-cev4u.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'saptagiri';

router.get('/members', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        const collection = db.collection('users');
        // Find some documents
        collection.find({ 'a': 3 }).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            callback(docs);
        });

        client.close();
    });
})

module.exports = router;