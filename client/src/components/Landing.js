import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    position: 'relative',
    color: theme.palette.text.secondary,
    top: -250,
    width: '75%',
    marginLeft: '11%',
    height: 800,
    backgroundColor: '#ECEFF1'
  },
  button: {
    margin: theme.spacing.unit
  },
  banner: {
    width: '100%'
  },
  greeting: {
    alignContent: 'center',
    color: '#ECEFF1',
    position: 'relative',
    top: -300,
    left: 175,
    margin: 10
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img className={classes.banner} src="https://i.imgur.com/igjgHce.jpg" />
      <Typography className={classes.greeting} type="display3">
        Discover new beers
      </Typography>
      <Typography className={classes.greeting} type="headline">
        Lorem ipsum dolor sit amet, debet dissentias nec in.
      </Typography>
      <Button className={classes.greeting} raised color="primary">
        Get Started
      </Button>
      <Button className={classes.greeting} raised color="accent">
        Register Now
      </Button>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome to the site.</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
