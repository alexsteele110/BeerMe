import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllReviews } from '../../actions';
import AllReviews from './AllReviews';
import Grid from 'material-ui/Grid';

class ReviewPage extends Component {
  componentDidMount() {
    this.props.fetchAllReviews();
  }

  render() {
    return (
      <div>
        <AllReviews />
      </div>
    );
  }
}

export default connect(null, { fetchAllReviews })(ReviewPage);
