const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Users';
const COLLECTION_NAME = 'users';

const schema = new Schema({
    id: String,
    name: String,
    email: String,
    phoneno: String,
    salt: String,
    password: String
});
  
const UsersModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME);
module.exports = UsersModel;
