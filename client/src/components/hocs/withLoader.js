import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

export default (ChildComponent, category) => {
  class withLoader extends Component {
    render() {
      console.log(category);
      const { auth } = this.props;
      const { isFetching, data } = this.props[category];

      if (auth === null || isFetching) {
        return <CircularProgress />;
      }
      if (data.length === 0) {
        return <h4>No results</h4>;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth, category }) {
    return { auth, category };
  }

  return connect(mapStateToProps)(withLoader);
};
