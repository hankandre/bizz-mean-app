const mongoose = require('mongoose');

// This is the same as const Schema = mongoose.Schema. Just shorter.
// The {varName} allows us to access a key from the object and use
// it as a variable.
const { Schema } = mongoose;

// All listings can share the same Schema. If you don't use the required: true
// key/value, the property is then considered optional in Mongoose's eyes.
// Since both sqft and city are properties on both rentals and sales objects, I've made
// them required.
const PropertySchema = new Schema({
  cost: Number,
  rent: Number,
  sqft: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const Listing = mongoose.model('Listing', PropertySchema);

module.exports = Listing;
