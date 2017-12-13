import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FavoritesList from './FavoritesList';

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

function DashboardPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <FavoritesList />
        </Grid>
      </Grid>
    </div>
  );
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardPage);
