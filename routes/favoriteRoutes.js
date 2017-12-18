const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Favorite = mongoose.model('favorites');
const Stats = mongoose.model('stats');

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

    const stats = new Stats({
      beerId: id,
      beerName: name,
      numFavs: 1
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

      await Stats.findOneAndUpdate(
        { beerId: id },
        inFavorites ? { $inc: { numFavs: -1 } } : { $inc: { numFavs: 1 } },
        function(err, results) {
          if (err) return handleError(err);
          if (results === null) {
            stats.save();
          }
        }
      );

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/favorites', requireLogin, async (req, res) => {
    const favorites = await Favorite.find({ _user: req.user.id });

    res.send(favorites);
  });
};
