#!usr/bin/env node

     // Imports MongoDB 
const { MongoClient } = require('mongodb');

     // Connection string to connect to database
const uri = "mongodb+srv://mrwoodring:toomanysecrets@mydata.wrojs.mongodb.net?retryWrites=true&w=majority";

     // Creates MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

     // Connects to client and send a query
client.connect(err => {
        console.log("Connected.");
        const datab = client.db("myData");
        const collection = datab.collection("superhero");
        // perform actions on the collection object
        collection.find({$and: [{  name: /^Spider/}, {Year: {$lt: '1991'}}, {APPEARANCES: {$gt: '1'}}]}).toArray(
        ).then( result => { for ( let i = 0; i < result.length; i++) {
                console.log(result[i].name);
                }
        client.close();
        });
});
