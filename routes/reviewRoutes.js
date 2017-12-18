const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Review = mongoose.model('reviews');
const Stats = mongoose.model('stats');

module.exports = app => {
  app.post('/api/reviews', requireLogin, async (req, res) => {
    const { beerId, beerName, rating, description } = req.body;

    const review = new Review({
      beerId,
      beerName,
      rating,
      description,
      _user: req.user.id,
      displayName: req.user.displayName,
      dateCreated: Date.now()
    });

    const stats = new Stats({
      beerId,
      beerName,
      ratings: [rating]
    });

    try {
      await review.save();

      await Stats.findOneAndUpdate(
        { beerId },
        { $push: { ratings: rating } },
        function(err, results) {
          if (err) return handleError(err);
          if (results === null) {
            stats.save();
          }
        }
      );

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

    res.send(reviews);
  });
  // retrieve all reviews made by particular user
  app.get('/api/reviews', requireLogin, async (req, res) => {
    const _user = req.user.id;
    const reviews = await Review.find({ _user });

    res.send(reviews);
  });

  app.get('/api/allReviews', async (req, res) => {
    const reviews = await Review.find({});

    res.send(reviews);
  });

  app.post('/api/reviews/:reviewId', requireLogin, async (req, res) => {
    const { reviewId } = req.params;
    const alreadyLiked = req.user.liked.includes(reviewId);

    try {
      const user = await User.findByIdAndUpdate(
        req.user.id,
        alreadyLiked
          ? { $pull: { liked: reviewId } }
          : { $push: { liked: reviewId } },
        { new: true }
      );

      const review = await Review.findByIdAndUpdate(
        reviewId,
        alreadyLiked ? { $inc: { helpful: -1 } } : { $inc: { helpful: 1 } },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
