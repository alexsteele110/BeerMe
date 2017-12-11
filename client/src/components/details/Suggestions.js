import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestedBeers } from '../../actions';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import BeersList from '../BeersList';
import glasses from './glasses';

const styles = theme => ({
  card: {
    maxWidth: 340,
    marginTop: 120
  },
  media: {
    height: 200
  }
});

class Suggestions extends Component {
  componentDidMount() {
    const { styleId } = this.props.beerDetails.info.data;
    const { data } = this.props.suggested;

    if (data.length === 0 || data[0].styleId !== styleId) {
      this.props.fetchSuggestedBeers(styleId);
    }
  }

  renderBeers() {
    const { isFetching } = this.props.suggested;

    if (isFetching) {
      return <CircularProgress />;
    }

    return (
      <div>
        <Typography type="display1" gutterBottom>
          Similar beers:
        </Typography>
        <BeersList listType="suggested" />
      </div>
    );
  }

  renderGlassDetails() {
    const { classes } = this.props;
    const { glasswareId } = this.props.beerDetails.info.data;

    if (glasswareId) {
      return (
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/FlRGHy3.jpg"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Drink in a {glasses[glasswareId].name}
              </Typography>
              <Typography component="p">
                A short-stemmed glass with a wide bottom and narrow top.
                Typically used for spirits like bourbon and brandy, it is also
                the correct choice for many beers over 8% ABV.
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div>
        <Typography type="headline">No glass recommended</Typography>
      </div>
    );
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={4}>
          {this.renderGlassDetails()}
        </Grid>
        <Grid item xs={12} md={8}>
          {this.renderBeers()}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ beerDetails, suggested }) {
  return { beerDetails, suggested };
}

export default connect(mapStateToProps, { fetchSuggestedBeers })(
  withStyles(styles)(Suggestions)
);
