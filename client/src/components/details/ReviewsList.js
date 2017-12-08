import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';

class ReviewsList extends Component {
  renderReviews = () => {
    const { isFetching, data } = this.props.reviews;

    if (isFetching) {
      return <CircularProgress />;
    }

    return data.map(review => {
      return (
        <div key={review.beerId}>
          <Paper>{review.description}</Paper>
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

export default connect(mapStateToProps)(ReviewsList);
