const mongoose = require('mongoose');
const { Schema } = mongoose;

const PropertySchema = new Schema({
  cost: Number,
  rent: Number,
  sqft: Number,
  city: {
    type: String,
    required: true
  }
});

const Listing = mongoose.model('Listing', PropertySchema);

module.exports = Listing;
