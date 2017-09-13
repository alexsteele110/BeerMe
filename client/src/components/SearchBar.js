import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../actions/index';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

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

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchBeers(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    const classes = this.props.classes;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className={classes.container}>
          <Input
            placeholder="Search beers..."
            className={classes.input}
            value={this.state.term}
            onChange={this.onInputChange}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));
