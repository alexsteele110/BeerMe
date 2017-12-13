import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import BeerCard from './BeerCard';
import Suggestions from './Suggestions';
import ReviewsList from './ReviewsList';

function TabContainer(props) {
  return (
    <div style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    backgroundColor: '#CFD8DC'
  },
  tabBar: {
    top: 64,
    boxShadow: theme.shadows[0],
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      top: 56
    }
  }
});

class BeerDetailsPage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { beerId } = this.props.match.params;

    return (
      <div className={classes.root}>
        <AppBar className={classes.tabBar}>
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Overview" />
            <Tab label="Suggestions" />
            <Tab label="Reviews" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            <BeerCard beerId={beerId} />
          </TabContainer>}
        {value === 1 &&
          <TabContainer>
            <Suggestions beerId={beerId} />
          </TabContainer>}
        {value === 2 &&
          <TabContainer>
            <ReviewsList beerId={beerId} />
          </TabContainer>}
      </div>
    );
  }
}

BeerDetailsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerDetailsPage);
