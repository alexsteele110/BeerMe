const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  reviews: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);

// Freely add and remove properties from userSchema here
