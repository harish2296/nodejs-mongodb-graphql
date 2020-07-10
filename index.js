const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./test-query')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/testdb')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        module.exports.Collection = names;
    });
});


app.use('/test-endpoint', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 
