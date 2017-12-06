const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Favorite = mongoose.model('favorites');

module.exports = app => {
  app.post('/api/favorites', requireLogin, async (req, res) => {
    const { id, ibu, abv, name } = req.body;
    const breweryName = req.body.breweries[0].name;
    const breweryId = req.body.breweries[0].id;
    const style = req.body.style.shortName;
    const inFavorites = req.user.favoriteBeers.includes(id);

    const favorite = new Favorite({
      _user: req.user.id,
      beerId: id,
      beerName: name,
      breweryId,
      breweryName,
      style,
      abv,
      ibu
    });

    try {
      const user = await User.findByIdAndUpdate(
        req.user.id,
        inFavorites
          ? { $pull: { favoriteBeers: id } }
          : { $push: { favoriteBeers: id } },
        { new: true }
      );
      inFavorites
        ? await Favorite.remove({ beerId: id, _user: req.user.id })
        : await favorite.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
