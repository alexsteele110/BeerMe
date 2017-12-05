import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function BeerClassification(props) {
  const { data } = props.beerDetails.info;
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography type="display2" gutterBottom>
            Classification
          </Typography>
          <Typography type="headline" gutterBottom>
            {data.style.name}
          </Typography>
          <br />
          <Typography type="subheading">
            {data.style.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

BeerClassification.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beerDetails }) {
  return { beerDetails };
}

export default connect(mapStateToProps)(withStyles(styles)(BeerClassification));
