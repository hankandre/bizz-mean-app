const mongoose = require('mongoose');

// This is just a way to colorize output to the terminal. Totally unnecessary,
// but nice for differentiating between different logs.
const chalk = require('chalk');
const listingData = require('../listingData');

// Bringing in my model for listings.
const Listing = require('./models/listing.model');

// These are set in heroku by typing:
// heroku config:set MONGO_USER=username MONGO_PW=password
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PW = process.env.MONGO_PW;

// This is a conditional that will set the mongoURI to the MLabs one if it's on heroku.
// You will need to change this because your url/uri will be different
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? `mongodb://${MONGO_USER}:${MONGO_PW}@ds155634.mlab.com:55634/prime-listings`
    : `mongodb://localhost/listings`;

// Connecting the database, the useMongoClient: true silences a Mongoose warning
mongoose.connect(mongoURI, {
  useMongoClient: true
});

// This silences the mongoose warning about promises
mongoose.Promise = global.Promise;

// Displays a message when the database connects
mongoose.connection.on('connected', function() {
  console.log(chalk.green('Connected to MongoDB'));
});

// Logs out any connection errors to the terminal
mongoose.connection.on('error', function(err) {
  console.log(chalk.bgRed(`MongoDB connection error`, err));
});

// Logs out a message that the database has been disconnected when I do ctrl+c
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log(
      chalk.bold.magenta(
        'Mongoose default connection disconnected through app termination'
      )
    );
    process.exit(0);
  });
});

// Inserts the listingData array if nothings in the database,
// otherwise it just logs out 'data already inserted'.
Listing.find({})
  .then(function(listings) {
    if (listings.length > 0)
      return console.log(chalk.underline.blue(`data already inserted`));
    return Listing.create(listingData)
      .then(function(success) {
        return console.log(`Listings inserted into database`);
      })
      .catch(function(err) {
        return console.log(
          chalk.bold.red(`Error inserting default listings into database `, err)
        );
      });
  })
  .catch(function(err) {
    return console.log(chalk.bold.red(`Error finding listings in database `, err));
  });

// exporting mongoose
module.exports = mongoose;
