const axios = require('axios');
const keys = require('../config/keys');

const ROOT_URL = `http://api.brewerydb.com/v2/search?key=${keys.breweryKey}`;

module.exports = app => {
  app.get('/api/search/:keyword', (req, res) => {
    const keywordName = req.params.keyword;
    const url = `${ROOT_URL}&type=beer&withBreweries=Y&q=${keywordName}`;

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
};
