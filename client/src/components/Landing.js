import React from 'react';
import Typography from 'material-ui/Typography';

const style = {
  width: '100%',
  marginTop: 50
};

const Landing = () => {
  return (
    <div style={style}>
      <Typography type="display4" align="center" gutterBottom>
        BeerMe
      </Typography>
      <Typography type="subheading" align="center" gutterBottom>
        Track all your favorite beers and breweries
      </Typography>
    </div>
  );
};

export default Landing;
