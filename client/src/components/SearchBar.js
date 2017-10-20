import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import SearchIcon from 'material-ui-icons/Search';
import BeersList from './BeersList';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit,
    width: '50%'
  }
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchBeers(this.state.term);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <SearchIcon />
        <form onSubmit={this.onFormSubmit}>
          <Input
            placeholder="Search beers..."
            className={classes.input}
            value={this.state.term}
            onChange={this.onInputChange}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
        </form>
        <BeersList />
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
