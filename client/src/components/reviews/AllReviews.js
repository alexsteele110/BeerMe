import React, { Component } from 'react';
import { connect } from 'react-redux';
import withLoader from '../hocs/withLoader';

class AllReviews extends Component {
  renderReviews() {
    return this.props.reviews.data.map(review => {
      return (
        <li key={review._id}>
          {review.beerName}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps)(withLoader(AllReviews, 'reviews'));
