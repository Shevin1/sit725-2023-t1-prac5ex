let client = require('../dbConnection');

let collection = client.db().collection('dog');

function postDog(dog, callback) {
    collection.insertOne(dog, callback);
}

function getAllDog(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postDog,getAllDog}