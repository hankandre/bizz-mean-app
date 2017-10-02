const mongoose = require('mongoose');
const chalk = require('chalk');
const bluebird = require('bluebird');
const listingData = require('../listingData');
const Listing = require('./models/listing.model');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PW = process.env.MONGO_PW;
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? `mongodb://${MONGO_USER}:${MONGO_PW}@ds155634.mlab.com:55634/prime-listings`
    : `mongodb://localhost/listings`;

mongoose.connect(mongoURI, {
  useMongoClient: true
});

mongoose.Promise = bluebird;

mongoose.connection.on('connected', function() {
  console.log(chalk.green('Connected to MongoDB'));
});

mongoose.connection.on('error', function(err) {
  console.log(chalk.bgRed(`MongoDB connection error`, err));
});

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

Listing.find({})
  .then(function(listings) {
    if (listings.length > 0)
      return console.log(chalk.underline.blue(`data already inserted`));
    return Listing.create(listingData)
      .then(function(success) {
        console.log(`Listings inserted into database`);
      })
      .catch(function(err) {
        console.log(
          chalk.bold.red(`Error inserting default listings into database `, err)
        );
      });
  })
  .catch(function(err) {
    console.log(chalk.bold.red(`Error finding listings in database `, err));
  });

module.exports = mongoose;
