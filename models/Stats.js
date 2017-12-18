const mongoose = require('mongoose');
const { Schema } = mongoose;

const statsSchema = new Schema({
  beerId: String,
  beerName: String,
  ratings: [Number],
  numFavs: { type: Number, default: 0 }
});

mongoose.model('stats', statsSchema);
