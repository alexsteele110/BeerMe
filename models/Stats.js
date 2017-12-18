const mongoose = require('mongoose');
const { Schema } = mongoose;

const statsSchema = new Schema({
  beerId: String,
  beerName: String,
  breweryId: String,
  breweryName: String,
  ratings: [Number],
  totalFavs: Number
});
