import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopReviews } from '../../actions';
import TopReviews from './TopReviews';

class ReviewPage extends Component {
  componentDidMount() {
    this.props.fetchTopReviews();
  }

  render() {
    return (
      <div>
        <TopReviews />
      </div>
    );
  }
}

export default connect(null, { fetchTopReviews })(ReviewPage);
