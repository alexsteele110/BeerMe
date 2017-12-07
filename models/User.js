const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  reviewed: [String],
  favoriteBeers: [String]
});

mongoose.model('users', userSchema);

// Freely add and remove properties from userSchema here
