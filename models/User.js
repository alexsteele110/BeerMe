const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function randomDisplayName(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex')
    .slice(0, len);
}

const userSchema = new Schema({
  googleId: String,
  displayName: { type: String, default: `user${randomDisplayName(8)}` },
  reviewed: [String],
  favoriteBeers: [String]
});

mongoose.model('users', userSchema);

// Freely add and remove properties from userSchema here
