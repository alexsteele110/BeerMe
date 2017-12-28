import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import BeersList from './BeersList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  }
});

function SearchPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} justify="space-around">
        <Grid item xs={12} md={8}>
          <BeersList listType="results" />
        </Grid>
      </Grid>
    </div>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchPage);
