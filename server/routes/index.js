const router = require('express').Router();
const Listing = require('../models/listing.model');
const chalk = require('chalk');

// Since we only have one route, we don't really need to abstract this out further.
// We only need to do one thing, access this information.
// If you were to do Hard Mode, you might want to create a '/properties' route
// That has a GET and POST. The GET would do what you see below, and the POST
// would add a new listing.
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
