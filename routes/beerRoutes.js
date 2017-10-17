const axios = require('axios');
const keys = require('../config/keys');

const ROOT_URL = `http://api.brewerydb.com/v2/search?key=${keys.breweryKey}`;

module.exports = app => {
  app.get('/search/:keyword', (req, res) => {
    const keywordName = req.params.keyword;
    const url = `${ROOT_URL}&type=beer&q=${keywordName}`;
    axios.get(url).then(res => {
      console.log(res.data);
    });
  });
};
