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
      displayName: req.user.displayName,
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
  // retrieve all reviews made for particular beerId
  app.get('/api/reviews/:beerId', async (req, res) => {
    const { beerId } = req.params;
    const reviews = await Review.find({ beerId });

    if (reviews.length === 0) {
      reviews.push('None found');
      res.send(reviews);
    }
    res.send(reviews);
  });

  app.get('/api/reviews', requireLogin, async (req, res) => {
    const _user = req.user.id;
    const reviews = await Review.find({ _user });

    if (reviews.length === 0) {
      reviews.push('None found');
      res.send(reviews);
    }
    res.send(reviews);
  });
};
