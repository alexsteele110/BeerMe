import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFavorites } from '../actions';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import FavoriteIcon from 'material-ui-icons/Favorite';

class SimpleSnackbar extends Component {
  state = {
    open: false
  };

  handleClick = async () => {
    const { id } = this.props.beerDetails.info.data;

    await this.props.updateFavorites(id);
    this.setState({ open: true });
  };

  handleRequestClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  decideContent = (inFavs, notInFavs) => {
    const { id } = this.props.beerDetails.info.data;
    const { favoriteBeers } = this.props.auth;
    const inFavorites = favoriteBeers.includes(id);

    return inFavorites ? inFavs : notInFavs;
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          {this.decideContent(<FavoriteIcon />, <FavoriteBorderIcon />)}
        </IconButton>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={
            <span id="message-id">
              {this.decideContent(
                'Added to favorites',
                'Removed from favorites'
              )}
            </span>
          }
        />
      </div>
    );
  }
}

function mapStateToProps({ auth, beerDetails }) {
  return { auth, beerDetails };
}

export default connect(mapStateToProps, { updateFavorites })(SimpleSnackbar);
