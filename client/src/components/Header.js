import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SearchBar from './SearchBar';
import AccountAvatar from './AccountAvatar';

const styles = theme => ({
  root: {
    height: 60,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  logo: {
    marginLeft: 20,
    textDecoration: 'none',
    color: 'white'
  },
  header: {
    boxShadow: theme.shadows[0]
  }
});

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
        return <AccountAvatar />;
    }
  }

  render() {
    const { classes, location } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.header} position="fixed">
          <Toolbar disableGutters>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Link to="/" className={classes.logo}>
                BeerMe
              </Link>
            </Typography>
            <SearchBar location={location.pathname} />

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
