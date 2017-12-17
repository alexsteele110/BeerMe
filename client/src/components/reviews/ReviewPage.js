import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllReviews } from '../../actions';
import Grid from 'material-ui/Grid';

class ReviewPage extends Component {
  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    if (this.props.reviews.isFetching) {
      return <h4>Fetching...</h4>;
    }
    return (
      <div>
        <h4>Herro</h4>
      </div>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}
export default connect(mapStateToProps, { fetchAllReviews })(ReviewPage);
