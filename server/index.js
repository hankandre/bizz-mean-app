const express = require('express');
require('./db');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

var server = app.listen(PORT);

console.log(chalk.bold.cyan(`Listening on port: %d`), server.address().port);

module.exports = app;
