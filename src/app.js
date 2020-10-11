const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const routesAccess = require('./routes/access');
const routesApi = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/access', routesAccess);
app.use('/api', routesApi);

module.exports = app;
