import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopReviews } from '../../actions';
import AllReviews from './AllReviews';

class ReviewPage extends Component {
  componentDidMount() {
    this.props.fetchTopReviews();
  }

  render() {
    return (
      <div>
        <AllReviews />
      </div>
    );
  }
}

export default connect(null, { fetchTopReviews })(ReviewPage);
