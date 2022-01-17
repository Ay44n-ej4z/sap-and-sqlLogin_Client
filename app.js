const cors = require('cors');
const bodyParser = require('body-parser');
const express  = require('express');
const app  = express();
const authentication = require('./routes/Authentication')
const SAP = require('./routes/SAP')
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(bodyParser.json())
app.use('/authentication',authentication);
app.use("/sapUserDetails",SAP);

module.exports = app;