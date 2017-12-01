import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails } from '../../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import BeerCard from './BeerCard';
import BeerSecondaryCard from './BeerSecondaryCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '2% 8%'
  },
  progress: {
    margin: '30% 50%'
  }
});

class BeerDetailsPage extends Component {
  componentDidMount = () => {
    const { beerId } = this.props.match.params;
    this.props.fetchBeerDetails(beerId);
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
          <Grid container spacing={24}>
            <Grid item xs={12} sm={5}>
              <BeerCard />
            </Grid>
            <Grid item xs={12} sm={7}>
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

export default connect(mapStateToProps, { fetchBeerDetails })(
  withStyles(styles)(BeerDetailsPage)
);
