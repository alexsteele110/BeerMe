import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 340,
    marginTop: 30
  },
  media: {
    height: 200
  }
});

class BeerSecondaryCard extends Component {
  render() {
    const { data } = this.props.beerDetails.info;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography type="display2" gutterBottom>
              Classification
            </Typography>
            <Typography type="headline" gutterBottom>
              {data.style.name}
            </Typography>
            <br />
            <Typography type="subheading">
              {data.style.description}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography type="display2">Ideal glass</Typography>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://i.imgur.com/FlRGHy3.jpg"
              />
              <CardContent>
                <Typography type="headline" component="h2">
                  {data.glass.name}
                </Typography>
                <Typography component="p">
                  A short-stemmed glass with a wide bottom and narrow top.
                  Typically used for spirits like bourbon and brandy, it is also
                  the correct choice for many beers over 8% ABV.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

BeerSecondaryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beerDetails }) {
  return { beerDetails };
}

export default connect(mapStateToProps)(withStyles(styles)(BeerSecondaryCard));
