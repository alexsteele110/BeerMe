import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestedBeers } from '../../actions';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import BeersList from '../BeersList';

const styles = theme => ({
  card: {
    maxWidth: 340,
    marginTop: 30
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
      return <h3>Loading...</h3>;
    }

    return <BeersList listType="suggested" />;
  }

  renderGlassDetails() {
    const { classes } = this.props;
    const { data } = this.props.beerDetails.info;
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

  render() {
    return (
      <div>
        {this.renderBeers()}
        {this.renderGlassDetails()}
      </div>
    );
  }
}

function mapStateToProps({ beerDetails, suggested }) {
  return { beerDetails, suggested };
}

export default connect(mapStateToProps, { fetchSuggestedBeers })(
  withStyles(styles)(Suggestions)
);
