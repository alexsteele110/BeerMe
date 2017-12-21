const axios = require('axios');
const keys = require('../config/keys');

const ROOT_URL = 'http://api.brewerydb.com/v2/';

module.exports = app => {
  app.get('/api/search/:keyword', async (req, res) => {
    const { keyword } = req.params;
    const url = `${ROOT_URL}search?key=${keys.breweryKey}&type=beer&withBreweries=Y&q=${keyword}`;

    try {
      const response = await axios.get(url);
      const { data } = response.data;
      // brewery API counts an empty search as a success. Checking for no data
      // and then returning an empty array to represent no results
      if (!data) {
        res.send([]);
      } else {
        const results = data.slice(0, 12);
        res.send(results);
      }
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/api/beer/:beerId', async (req, res) => {
    const { beerId } = req.params;
    const url = `${ROOT_URL}beer/${beerId}?key=${keys.breweryKey}&withBreweries=Y`;

    try {
      const response = await axios.get(url);
      const { data } = response.data;

      if (req.user) {
        const inFavorites = req.user.favoriteBeers.includes(data.id);
        res.send({ data, inFavorites });
      } else {
        res.send({ data });
      }
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/api/suggested/:styleId', async (req, res) => {
    const { styleId } = req.params;
    const url = `${ROOT_URL}beers/?key=${keys.breweryKey}&styleId=${styleId}&hasLabels=Y&withBreweries=Y&order=random&randomCount=5/`;

    try {
      const response = await axios.get(url);
      res.send(response.data.data);
    } catch (err) {
      res.send(err);
    }
  });
};
