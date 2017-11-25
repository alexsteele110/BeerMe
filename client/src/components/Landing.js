import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  paper: {
    padding: 24,
    height: 400
  },
  banner: {
    padding: 136,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#263238',
    height: 200
  },
  button: {
    float: 'right',
    right: '8%',
    top: -30
  },
  greeting: {
    color: 'white',
    textDecoration: 'bold'
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
          </Paper>
          <Button className={classes.button} fab color="primary">
            <KeyboardArrowDownIcon />
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography type="body1">
              Sensibus partiendo gloriatur cum ex, sed omnium laoreet eu. Dicat
              adipisci quaerendum an quo, in nec purto maluisset incorrupte.
              Virtute civibus iracundia pro id, maiorum recusabo convenire vim
              ad.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
