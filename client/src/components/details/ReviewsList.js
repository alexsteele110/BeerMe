import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import withLoader from '../hocs/withLoader';
import ThumbsUp from '../reviews/ThumbsUp';
import Rating from 'react-rating';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
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
  divider: {
    margin: '16px 0px'
  },
  star: {
    color: '#EC8C19',
    marginLeft: -2
  },
  description: {
    marginTop: 16,
    whiteSpace: 'pre-wrap'
  }
};

class ReviewsList extends Component {
  renderReviews = () => {
    const { data } = this.props.reviews;

    return data.map(review => {
      const { classes, auth, showName } = this.props;
      const dateCreated = new Date(review.dateCreated).toLocaleDateString();

      return (
        <Grid item xs={12} md={6} key={review._id}>
          <Paper className={classes.paper}>
            {showName
              ? <Typography type="subheading">
                  <b>
                    {review.beerName}
                  </b>
                  <Link to={`/beer/${review.beerId}`}>
                    <Typography type="caption">( see beer details )</Typography>
                  </Link>
                </Typography>
              : ''}

            <Rating
              className={classes.star}
              initialRate={review.rating}
              readonly
              empty={<StarBorderIcon />}
              full={<StarIcon />}
            />

            <Typography className={classes.description} type="body1">
              {review.description}
            </Typography>
            <Divider className={classes.divider} />

            <Typography type="caption">
              <b>{review.displayName}</b> on {dateCreated}
            </Typography>

            {auth ? <ThumbsUp review={review} /> : ''}
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

function mapStateToProps({ auth, reviews }) {
  return { auth, reviews };
}

export default connect(mapStateToProps)(
  withStyles(styles)(withLoader(ReviewsList, 'reviews'))
);
