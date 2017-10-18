import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions';

class BeersList extends Component {
  componentDidMount() {
    this.props.fetchBeers(this.props.match.params.beer);
  }

  render() {
    return (
      <div>
        <h2>Hello Everyone</h2>
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

export default connect(mapStateToProps, { fetchBeers })(BeersList);
