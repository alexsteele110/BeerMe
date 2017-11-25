import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import SearchIcon from 'material-ui-icons/Search';

const styles = theme => ({
  container: {
    display: 'flex',
    marginRight: 34
  },
  input: {
    margin: theme.spacing.unit,
    width: '100%',
    backgroundColor: '#78909C',
    color: 'white',
    paddingLeft: 16,
    '&:hover': {
      backgroundColor: '#90A4AE'
    }
  },
  icon: {
    marginTop: 11,
    marginLeft: 22
  }
});

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchBeers(this.state.term);
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <SearchIcon className={classes.icon} />
        <form onSubmit={this.onFormSubmit}>
          <Input
            placeholder="Search..."
            disableUnderline={true}
            className={classes.input}
            value={this.state.term}
            onChange={this.onInputChange}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
        </form>
        {this.props.beers.fireRedirect && this.props.location !== '/search'
          ? <Redirect to={'/search'} />
          : ''}
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beers }) {
  return { beers };
}

export default connect(mapStateToProps, { fetchBeers })(
  withStyles(styles)(SearchBar)
);
