const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Review = mongoose.model('reviews');

module.exports = app => {
  app.post('/api/reviews', requireLogin, async (req, res) => {
    const { beerId, rating, description } = req.body;
    const review = new Review({
      beerId,
      rating,
      description,
      _user: req.user.id,
      dateCreated: Date.now()
    });

    try {
      await review.save();
      req.user.reviewed.push(review.beerId);
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/reviews', requireLogin, async (req, res) => {
    const reviews = await Review.find({});

    res.send(reviews);
  });
};
