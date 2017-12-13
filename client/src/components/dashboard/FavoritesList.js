import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { fetchFavorites } from '../../actions';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import FavoriteIcon from 'material-ui-icons/Favorite';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import ReviewDialog from '../reviews/ReviewDialog';

const styles = theme => ({
  demo: {
    background: theme.palette.background.paper
  },
  heart: {
    color: '#C95353',
    height: 40,
    width: 40,
    marginRight: 30
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
        <ListItem
          button
          onClick={() => {
            this.props.history.push(`/beer/${favorite.beerId}`);
          }}
          key={favorite._id}
        >
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
          <ListItemText
            primary={favorite.beerName}
            secondary={favorite.breweryName}
          />
          <ListItemSecondaryAction>
            <ReviewDialog beerId={favorite.beerId} />
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.demo}>
        <List dense={this.state.dense}>
          <ListItem>
            <Typography type="display1">
              <FavoriteIcon className={classes.heart} />
              <b>My Favorites</b>
            </Typography>
          </ListItem>
          <Divider />
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
  withStyles(styles)(withRouter(FavoritesList))
);
