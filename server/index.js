'use strict';
require('babel-core/register')({});
require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

routes(app);

app.listen(port, () => {
  console.log('Server is running at port: ', port);
});
