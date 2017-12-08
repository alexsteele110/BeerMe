import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import Paper from 'material-ui/Paper';

class FavoritesList extends Component {
  async componentDidMount() {
    await this.props.fetchFavorites();
  }

  renderFavorites = () => {
    const { isFetching, data } = this.props.favorites;

    if (isFetching) {
      return <h3>Loading...</h3>;
    }

    return data.map(favorite => {
      return (
        <div key={favorite.beerId}>
          <Paper>{favorite.beerName}</Paper>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderFavorites()}</div>;
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, { fetchFavorites })(FavoritesList);
