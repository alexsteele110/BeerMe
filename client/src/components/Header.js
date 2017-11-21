import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SearchBar from './SearchBar';

const styles = {
  root: {
    height: 60,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button color="contrast" href="/auth/google">
            Login With Google
          </Button>
        );
      default:
        return (
          <Button color="contrast" href="/api/logout">
            Logout
          </Button>
        );
    }
  }

  render() {
    const { root, menuButton, flex } = this.props.classes;
    return (
      <div className={root}>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <IconButton
              className={menuButton}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={flex}>
              BeerMe<i className="material-icons">local_drink</i>
            </Typography>
            <SearchBar />
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
