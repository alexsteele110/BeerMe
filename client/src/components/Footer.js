import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 56,
    paddingBottom: 36,
    marginTop: theme.spacing.unit * 16,
    background: theme.palette.primary[900],
    color: theme.palette.primary[200],
    textAlign: 'center',
    position: 'sticky'
  })
});

function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Typography
          type="headline"
          component="h5"
          color="inherit"
          gutterBottom={true}
        >
          Put something important here
        </Typography>
        <Typography
          type="subheading"
          component="p"
          color="inherit"
          gutterBottom={true}
        >
          &copy;2017 Alex Steele
        </Typography>
        <a
          href="https://github.com/alexsteele110/BeerMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://i.imgur.com/yfWEKaX.png" alt="GitHub" />
        </a>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
