const mongoose = require('mongoose');
const db = require('../config.js').db;

const dbURI = `mongodb+srv://127.0.0.1:27017`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

console.log(dbURI);

mongoose
  .connect(dbURI, options)
  .then(() => {
    console.info('Mongoose connection established');
    mongoose.set('debug', true);
  })
  .catch((e) => {
    console.info('Mongoose connection error');
    console.error(e);
});
  
mongoose.connection.on('connected', () => {
  console.info('Mongoose default connection open to ' + dbURI);
});
  
mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error: ' + err);
});
  
mongoose.connection.on('disconnected', () => {
  console.info('Mongoose default connection disconnected');
});
