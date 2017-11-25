import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  },
  logo: {
    textDecoration: 'none',
    color: 'white'
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Link to="/" className={classes.logo}>
                BeerMe
              </Link>
            </Typography>
            <SearchBar location={this.props.location.pathname} />
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
