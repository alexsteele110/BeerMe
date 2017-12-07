import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import Paper from 'material-ui/Paper';

class FavoritesList extends Component {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderFavorites() {
    return this.props.beers.favorites.map(favorite => {
      return <Paper key={favorite.beerName}>{favorite.beerName}</Paper>;
    });
  }

  render() {
    return <div>{this.renderFavorites()}</div>;
  }
}

function mapStateToProps({ beers }) {
  return { beers };
}

export default connect(mapStateToProps, { fetchFavorites })(FavoritesList);
