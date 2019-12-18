const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost/hackathonDB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

app.use('/', api);


const port = 9000;
app.listen(port, function() {
  console.log(`Running on port ${port}`);
});
