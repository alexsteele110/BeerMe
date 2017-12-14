import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerReviews } from '../../actions';
import { withStyles } from 'material-ui/styles';
import withLoader from '../hocs/withLoader';
import Rating from 'react-rating';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 24
  },
  thumb: {
    height: 22,
    width: 20,
    float: 'right'
  },
  star: {
    color: '#EC8C19'
  }
};

class ReviewsList extends Component {
  renderReviews = () => {
    const { data } = this.props.reviews;
    console.log(this.props);

    return data.map(review => {
      const { classes } = this.props;
      const dateCreated = new Date(review.dateCreated).toLocaleDateString();

      return (
        <Grid item xs={12} md={6} lg={4} key={review._id}>
          <Paper className={classes.paper}>
            <Rating
              initialRate={review.rating}
              readonly
              empty={<StarBorderIcon className={classes.star} />}
              full={<StarIcon className={classes.star} />}
            />

            <Typography type="body1">
              {review.description}
            </Typography>
            <Divider />
            <Typography type="caption">
              <b>{review.displayName}</b> on {dateCreated} | Helpful?{' '}
              <ThumbUpIcon className={classes.thumb} /> {review.helpful}
            </Typography>
          </Paper>
        </Grid>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.renderReviews()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, { fetchBeerReviews })(
  withStyles(styles)(withLoader(ReviewsList, 'reviews'))
);
