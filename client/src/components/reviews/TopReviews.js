import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withLoader from '../hocs/withLoader';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MobileStepper from 'material-ui/MobileStepper';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
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
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: 16,
    '&:hover': {
      boxShadow: theme.shadows[4]
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    background: theme.palette.background.default
  }
});

class TopReviews extends Component {
  state = {
    activeStep: 0,
    filter: 'avgScore'
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

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

  renderFilterSelect() {
    const { classes } = this.props;
    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter">Filter</InputLabel>
          <Select
            value={this.state.filter}
            onChange={this.handleFilterChange}
            input={<Input name="filter" id="filter" />}
          >
            <MenuItem value="avgScore">Top rating</MenuItem>
            <MenuItem value="numScores">Most ratings</MenuItem>
            <MenuItem value="numFavs">Most favorites</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }

  renderReviews(filterCategory) {
    const { data } = this.props.reviews;
    const { activeStep } = this.state;
    const filterData = data.sort(
      (a, b) => b[filterCategory] - a[filterCategory]
    );
    const steppedData = filterData.slice(activeStep * 6, (activeStep + 1) * 6);

    return steppedData.map(review => {
      const { classes } = this.props;
      return (
        <Grid item xs={12} md={6} key={review._id}>
          <Link
            to={`/beer/${review.beerId}`}
            style={{ textDecoration: 'none' }}
          >
            <Paper className={classes.paper}>
              <Typography type="headline">
                {review.beerName}
              </Typography>
              <Typography type="subheading">
                Number of favorites: {review.numFavs}
                <br />
                Average user score: {review.avgScore}
                <br />
                Number of reviews: {review.numScores}
              </Typography>
            </Paper>
          </Link>
        </Grid>
      );
    });
  }

  render() {
    const { classes, theme, reviews } = this.props;
    const totalSteps = Math.ceil(reviews.data.length / 6);
    return (
      <Grid
        className={classes.root}
        container
        spacing={24}
        justify="space-between"
      >
        <Grid item xs={12}>
          <Typography type="display2">BeerMe Hall of Fame</Typography>
        </Grid>
        <Grid item xs={4}>
          {this.renderFilterSelect()}
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              Page {this.state.activeStep + 1} of {totalSteps}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
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
        {this.renderReviews(this.state.filter)}
      </Grid>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(withLoader(TopReviews, 'reviews'))
);
