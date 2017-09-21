import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

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
      term: '',
      fireRedirect: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ fireRedirect: true });
  }

  // extract route params through express to search brewerydb with search term
  // Have '/search/this.state.term' route display list component of beers

  render() {
    const classes = this.props.classes;
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div className={classes.container}>
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
          <Button
            raised
            color="primary"
            className={classes.button}
            to={`/search/${this.state.term}`}
            component={Link}
          >
            Search
          </Button>
        </form>
        {fireRedirect && <Redirect to={from || `/search/${this.state.term}`} />}
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
