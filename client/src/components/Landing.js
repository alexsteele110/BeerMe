import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
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
  paper: {
    padding: 24,
    height: 400
  },
  banner: {
    padding: 136,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'url(https://i.imgur.com/5utcnvd.png)',
    height: 360
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
    color: '#263238',
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

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.banner}>
            <Typography
              className={classes.greeting}
              type="display4"
              gutterBottom
            >
              BeerMe
            </Typography>
            <Typography className={classes.greeting} type="headline">
              Lorem ipsum dolor sit amet, in stet omnis periculis quo, vim nulla
              persius an. Ius an sint omnesque. Ad eos pertinax pericula, vis in
              mundi consul. Eam at modo aliquam veritus.
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
            <FavoriteIcon className={classes.largeIcon} />
            <Typography type="headline" gutterBottom>
              <b>Favorite</b>
            </Typography>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <RateReviewIcon className={classes.largeIcon} />
            <Typography type="headline" gutterBottom>
              <b>Review</b>
            </Typography>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.container}>
            <FindInPageIcon className={classes.largeIcon} />
            <Typography type="headline" gutterBottom>
              <b>Search</b>
            </Typography>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
