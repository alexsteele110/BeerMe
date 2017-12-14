import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';

class ThumbsUp extends Component {
  render() {
    return (
      <div>
        <ThumbUpIcon />
      </div>
    );
  }
}

export default ThumbsUp;
