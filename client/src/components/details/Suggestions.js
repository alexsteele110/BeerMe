import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestedBeers } from '../../actions';
import { withStyles } from 'material-ui/styles';
import withLoader from '../hocs/withLoader';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import BeersList from '../BeersList';
import glasses from './glasses';

const styles = theme => ({
  card: {
    maxWidth: 340,
    marginTop: 80
  },
  media: {
    height: 200
  },
  paper: {
    marginTop: 80,
    padding: 16,
    textAlign: 'center'
  }
});

class Suggestions extends Component {
  renderBeers() {
    return (
      <div>
        <Typography type="display1" gutterBottom>
          Similar
        </Typography>
        <BeersList listType="suggested" />
      </div>
    );
  }

  renderGlassDetails() {
    const { classes, beerDetails } = this.props;

    if (!beerDetails.isFetching && beerDetails.data.glasswareId) {
      const { glasswareId } = this.props.beerDetails.data;
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
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div>
        <Paper className={classes.paper}>
          <Typography type="display1">No glass recommended</Typography>
        </Paper>
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
  withStyles(styles)(withLoader(Suggestions, 'suggested'))
);
