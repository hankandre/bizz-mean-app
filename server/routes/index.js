const router = require('express').Router();
const Listing = require('../models/listing.model');
const chalk = require('chalk');

router.get('/', function(req, res) {
  Listing.find({})
    .then(function(listings) {
      res.send(listings);
    })
    .catch(function(err) {
      console.log(chalk.bold.red(`Error querying database`, err));
      res.sendStatus(500);
    });
});

module.exports = router;
