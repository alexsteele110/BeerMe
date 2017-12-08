import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Rating from 'react-rating';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

const styles = {
  paper: {
    padding: 16
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
    const { isFetching, data } = this.props.reviews;

    if (isFetching) {
      return <CircularProgress />;
    }

    return data.map(review => {
      const { classes } = this.props;
      const dateCreated = new Date(review.dateCreated).toLocaleDateString();

      return (
        <div key={review.beerId}>
          <Paper className={classes.paper}>
            <Rating
              initialRate={review.rating}
              readonly
              empty={<StarBorderIcon className={classes.star} />}
              full={<StarIcon className={classes.star} />}
            />

            <Typography type="body1">{review.description}</Typography>
            <Divider />
            <Typography type="caption">
              <b>{review.displayName}</b> on {dateCreated} | Helpful?{' '}
              <ThumbUpIcon className={classes.thumb} /> {review.helpful}
            </Typography>
          </Paper>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderReviews()}</div>;
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps)(withStyles(styles)(ReviewsList));
