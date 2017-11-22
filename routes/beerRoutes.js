const axios = require('axios');
const keys = require('../config/keys');

const ROOT_URL = 'http://api.brewerydb.com/v2/';

module.exports = app => {
  app.get('/api/search/:keyword', (req, res) => {
    const keywordName = req.params.keyword;
    const url = `${ROOT_URL}search?key=${keys.breweryKey}&type=beer&withBreweries=Y&q=${keywordName}`;

    axios
      .get(url)
      .then(response => {
        const results = response.data.data.slice(0, 12);
        res.send(results);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/api/beer/:beerId', (req, res) => {
    const beerId = req.params.beerId;
    const url = `${ROOT_URL}beer/${beerId}?key=${keys.breweryKey}&withBreweries=Y`;

    axios
      .get(url)
      .then(response => {
        const result = response.data;
        res.send(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
