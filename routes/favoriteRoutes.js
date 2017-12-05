const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/favorites', requireLogin, async (req, res) => {
    const { beerId } = req.body;
    const inFavorites = req.user.favoriteBeers.includes(beerId);

    if (inFavorites) {
      try {
        const user = await User.findByIdAndUpdate(
          req.user.id,
          { $pull: { favoriteBeers: beerId } },
          { new: true }
        );
        res.send(user);
      } catch (err) {
        res.send(error);
      }
    } else {
      try {
        const user = await User.findByIdAndUpdate(
          req.user.id,
          { $push: { favoriteBeers: beerId } },
          { new: true }
        );
        res.send(user);
      } catch (err) {
        res.send(err);
      }
    }
  });
};
