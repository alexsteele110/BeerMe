import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails, fetchSuggestedBeers } from '../../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import BeerCard from './BeerCard';
import BeerSecondaryCard from './BeerSecondaryCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%'
  },
  progress: {
    margin: '25% 50%'
  }
});

class BeerDetailsPage extends Component {
  componentDidMount = async () => {
    const { beerId } = this.props.match.params;
    await this.props.fetchBeerDetails(beerId);

    const { styleId } = this.props.beerDetails.info.data;
    console.log(styleId);
    await this.props.fetchSuggestedBeers(styleId);
  };

  renderContent = () => {
    const { status } = this.props.beerDetails.info;
    const { isFetching } = this.props.beerDetails;
    const { classes } = this.props;

    if (isFetching) {
      return (
        <div>
          <CircularProgress className={classes.progress} size={100} />
        </div>
      );
    }

    if (status === 'success') {
      return (
        <div className={classes.root}>
          <Grid container justify="space-between" spacing={24}>
            <Grid item xs={12} sm={5}>
              <BeerCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BeerSecondaryCard />
            </Grid>
          </Grid>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

BeerDetailsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beerDetails }) {
  return { beerDetails };
}

export default connect(mapStateToProps, {
  fetchBeerDetails,
  fetchSuggestedBeers
})(withStyles(styles)(BeerDetailsPage));
