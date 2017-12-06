const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  // Able to reduce repetitive code here?
  app.post('/api/favorites/:beerId', requireLogin, async (req, res) => {
    const { beerId } = req.params;
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
