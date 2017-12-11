import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { fetchFavorites } from '../../actions';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ReviewDialog from '../reviews/ReviewDialog';

const styles = theme => ({
  demo: {
    background: theme.palette.background.paper
  }
});

class FavoritesList extends Component {
  state = {
    dense: false,
    secondary: false
  };

  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderFavorites = () => {
    const { isFetching, data } = this.props.favorites;

    if (isFetching) {
      return <h3>Loading...</h3>;
    }

    return data.map(favorite => {
      return (
        <Link
          to={`/beer/${favorite.beerId}`}
          style={{ textDecoration: 'none' }}
        >
          <ListItem button key={favorite._id}>
            <ListItemIcon>
              <ReviewDialog beerId={favorite.beerId} />
            </ListItemIcon>
            <ListItemText
              primary={favorite.beerName}
              secondary={favorite.breweryName}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Link>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.demo}>
        <List dense={this.state.dense}>
          {this.renderFavorites()}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, { fetchFavorites })(
  withStyles(styles)(FavoritesList)
);
