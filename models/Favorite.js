const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  beerId: String,
  beerName: String,
  breweryId: String,
  breweryName: String,
  style: String,
  abv: String,
  ibu: String
});

mongoose.model('favorites', favoriteSchema);
