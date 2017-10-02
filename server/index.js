const express = require('express');
// Bringing in the db.js into my server instantiation
require('./db');
const path = require('path');
// A simple module for colorizing output. Not needed, but nice
const chalk = require('chalk');
// A logger, so we can see what's going on in our server
const morgan = require('morgan');
const app = express();
// Accounting Heroku.
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

// It's usually a good idea to use a route name for all your communications with the server.
// If you don't, you can have annoying problems. Imagine you have the route /listings in your
// Angular app AND /listings on your server. Even if it does work, it would make debugging later
// much harder. Now if I want to access any information from my server I have to use the base route
// of /api. Now I know I'm explicitly trying to ping my server.
app.use('/api', routes);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

var server = app.listen(PORT);

// This is kinda a fancy way of logging out the 'Listening on port' message.
// %d in a string allows us to inject a number into it, and server.address().port
// is a way to access the port after it's been defined. Notice how I'm setting
// app.listen to that variable on line 29.
console.log(chalk.bold.cyan(`Listening on port: %d`), server.address().port);

// Exporting my app
module.exports = app;
