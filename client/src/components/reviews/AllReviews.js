import React, { Component } from 'react';
import { connect } from 'react-redux';
import withLoader from '../hocs/withLoader';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    padding: '7%',
    flexGrow: 1
  },
  paper: {
    padding: 16,
    minHeight: 200
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    background: theme.palette.background.default
  }
});

class AllReviews extends Component {
  state = { activeStep: 0 };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  renderReviews() {
    const { data } = this.props.reviews;
    const { activeStep } = this.state;
    const steppedData = data.slice(activeStep * 6, (activeStep + 1) * 6);

    return steppedData.map(review => {
      const { classes } = this.props;
      return (
        <Grid item xs={12} md={6} key={review._id}>
          <Paper className={classes.paper}>
            {review.beerName}
          </Paper>
        </Grid>
      );
    });
  }

  render() {
    const { classes, theme, reviews } = this.props;
    const totalSteps = Math.ceil(reviews.data.length / 6);
    return (
      <Grid className={classes.root} container spacing={24}>
        <Grid item xs={12}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              Step {this.state.activeStep + 1} of {totalSteps}
            </Typography>
          </Paper>
          <MobileStepper
            type="text"
            steps={totalSteps}
            position="static"
            activeStep={this.state.activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button
                dense
                onClick={this.handleNext}
                disabled={this.state.activeStep === totalSteps - 1}
              >
                Next
                {theme.direction === 'rtl'
                  ? <KeyboardArrowLeft />
                  : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button
                dense
                onClick={this.handleBack}
                disabled={this.state.activeStep === 0}
              >
                {theme.direction === 'rtl'
                  ? <KeyboardArrowRight />
                  : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Grid>
        {this.renderReviews()}
      </Grid>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(withLoader(AllReviews, 'reviews'))
);
