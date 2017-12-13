import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

export default (ChildComponent, category) => {
  class withLoader extends Component {
    render() {
      const { auth } = this.props;
      if (auth === null || this.props[category].isFetching) {
        return <CircularProgress />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth, category }) {
    return { auth, category };
  }

  return connect(mapStateToProps)(withLoader);
};
