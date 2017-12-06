const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/favorites/:beerId', requireLogin, async (req, res) => {
    const { beerId } = req.params;
    const inFavorites = req.user.favoriteBeers.includes(beerId);

    try {
      const user = await User.findByIdAndUpdate(
        req.user.id,
        inFavorites
          ? { $pull: { favoriteBeers: beerId } }
          : { $push: { favoriteBeers: beerId } },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.send(error);
    }
  });
};
