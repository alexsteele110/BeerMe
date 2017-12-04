import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

const styles = theme => ({
  card: {
    maxWidth: 340,
    marginTop: 30
  },
  media: {
    height: 200
  }
});

function GlassDetails(props) {
  const { classes } = props;
  const { data } = props.beerDetails.info;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/FlRGHy3.jpg"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Drink in a {data.glass ? data.glass.name : 'None suggested'}
          </Typography>
          <Typography component="p">
            A short-stemmed glass with a wide bottom and narrow top. Typically
            used for spirits like bourbon and brandy, it is also the correct
            choice for many beers over 8% ABV.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

function mapStateToProps({ beerDetails }) {
  return { beerDetails };
}

export default connect(mapStateToProps)(withStyles(styles)(GlassDetails));
