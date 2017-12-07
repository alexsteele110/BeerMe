import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import BeersList from './BeersList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function SearchPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Filters component</Paper>
        </Grid>
        <Grid item xs={8}>
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
