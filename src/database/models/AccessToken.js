const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Access_Token';
const COLLECTION_NAME = 'access_token';

const schema = new Schema({
    appKey: String,
    account: String,
    accessToken: String,
    expiresIn: Number
});
  
const AccessTokenModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME);
module.exports = AccessTokenModel;
