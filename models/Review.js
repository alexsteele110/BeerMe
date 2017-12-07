const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  beerId: String,
  rating: { type: Number, min: 0, max: 5 },
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  helpful: { type: Number, default: 0 }
});

// _user property adds the idea to the schema that every review belongs to a
// particular user and references the User collection.

mongoose.model('reviews', reviewSchema);
