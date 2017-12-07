import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';

const styles = {
  root: {
    display: 'flex'
  },
  popperClose: {
    pointerEvents: 'none'
  },
  purpleAvatar: {
    margin: 10,
    marginRight: 20,
    color: '#fff',
    backgroundColor: deepPurple[400],
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
};

class AccountAvatar extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleLogout = () => {};

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <Avatar
              className={classes.purpleAvatar}
              aria-owns={this.state.open ? 'menu-list' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              AS
            </Avatar>
          </Target>
          <Popper
            placement="left-start"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleRequestClose}>
              <Grow
                in={open}
                id="menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleRequestClose}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>
                      <Link to="/dashboard" className={classes.link}>
                        My account
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <a href="/api/logout" className={classes.link}>
                        Logout
                      </a>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

AccountAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountAvatar);

// <Avatar className={classes.purpleAvatar}>A</Avatar>
