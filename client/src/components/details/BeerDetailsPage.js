import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails } from '../../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import BeerCard from './BeerCard';
import BeerSecondaryCard from './BeerSecondaryCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class BeerDetailsPage extends Component {
  componentDidMount = () => {
    const { beerId } = this.props.match.params;
    this.props.fetchBeerDetails(beerId);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <BeerCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BeerSecondaryCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

BeerDetailsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { fetchBeerDetails })(
  withStyles(styles)(BeerDetailsPage)
);
