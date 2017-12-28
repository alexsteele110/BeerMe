import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';

const styles = {
  avatar: {
    marginRight: 36,
    marginLeft: 36,
    height: 36,
    width: 36,
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
};

class AccountAvatar extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AccountCircleIcon className={classes.avatar} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem
            component={Link}
            to="/dashboard"
            onClick={this.handleRequestClose}
          >
            My account
          </MenuItem>

          <MenuItem>
            <a className={classes.link} href="/api/logout">
              Logout
            </a>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

AccountAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountAvatar);
