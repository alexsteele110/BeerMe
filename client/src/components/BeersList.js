import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeersList extends Component {
  render() {
    return (
      <div>
        <h2>Beers List</h2>
        <h4>
          {this.props.beers.name}
        </h4>
        <h4>
          {this.props.beers.description}
        </h4>
      </div>
    );
  }
}

function mapStateToProps({ beers }) {
  return { beers };
}

export default connect(mapStateToProps)(BeersList);
