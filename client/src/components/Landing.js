import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import FavoriteIcon from 'material-ui-icons/Favorite';
import RateReviewIcon from 'material-ui-icons/RateReview';
import FindInPageIcon from 'material-ui-icons/FindInPage';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    [theme.breakpoints.up('lg')]: {
      margin: '12%',
      marginTop: 40
    }
  },
  banner: {
    padding: 136,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'url(https://i.imgur.com/5utcnvd.png)',
    height: 220,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  button: {
    margin: theme.spacing.unit
  },
  fab: {
    float: 'right',
    right: '8%',
    top: -30
  },
  greeting: {
    color: 'white',
    textDecoration: 'bold'
  },
  largeIcon: {
    height: 120,
    width: 120,
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 6
  },
  container: {
    padding: 50,
    textAlign: 'center'
  }
});

function Landing(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.banner}>
            <Typography className={classes.greeting} type="display3">
              BeerMe
            </Typography>
            <Typography className={classes.greeting} type="headline">
              Serving all of your beer and brewery needs
            </Typography>
            <Button className={classes.button} raised color="inherit">
              Get Started
            </Button>
          </Paper>
          <Button className={classes.fab} fab color="primary">
            <KeyboardArrowDownIcon />
          </Button>
        </Grid>

        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <FavoriteIcon
              style={{ color: '#C95353' }}
              className={classes.largeIcon}
            />
            <Typography type="headline" gutterBottom>
              <b>Favorite</b>
            </Typography>
            <Typography type="subheading">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <RateReviewIcon
              style={{ color: '#3E997E' }}
              className={classes.largeIcon}
            />
            <Typography type="headline" gutterBottom>
              <b>Review</b>
            </Typography>
            <Typography type="subheading">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <FindInPageIcon
              style={{ color: '#4668B2' }}
              className={classes.largeIcon}
            />
            <Typography type="headline" gutterBottom>
              <b>Search</b>
            </Typography>
            <Typography type="subheading">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <img height="100" src="https://i.imgur.com/Yr7LVd0.png" alt="" />
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <img height="150" src="https://i.imgur.com/6KmeQpG.png" alt="" />
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <img height="80" src="https://i.imgur.com/BqVae5B.png" alt="" />
          </div>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
