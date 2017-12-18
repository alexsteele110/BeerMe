const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Review');
require('./models/Favorite');
require('./models/Stats');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/beerRoutes')(app);
require('./routes/reviewRoutes')(app);
require('./routes/favoriteRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running...');
});
