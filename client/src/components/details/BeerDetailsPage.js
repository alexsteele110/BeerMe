import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails, fetchSuggestedBeers } from '../../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import BeerCard from './BeerCard';
import BeerClassification from './BeerClassification';
import BeersList from '../BeersList';
import GlassDetails from './GlassDetails';

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
  async componentDidMount() {
    const { beerId } = this.props.match.params;
    await this.props.fetchBeerDetails(beerId);

    const { styleId } = this.props.beerDetails.info.data;
    await this.props.fetchSuggestedBeers(styleId);
  }

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
            <Grid item xs={12} md={5}>
              <BeerCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <BeerClassification />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography type="display2" gutterBottom>
                Similar beers:
              </Typography>
              <BeersList listType="suggested" />
            </Grid>
            <Grid item xs={12} md={5}>
              <GlassDetails />
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

function mapStateToProps({ beerDetails, suggested }) {
  return { beerDetails, suggested };
}

export default connect(mapStateToProps, {
  fetchBeerDetails,
  fetchSuggestedBeers
})(withStyles(styles)(BeerDetailsPage));
