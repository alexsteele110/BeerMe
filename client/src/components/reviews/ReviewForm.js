import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  state = {
    review: ''
  };

  handleChange = event => {
    this.setState({ review: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}>
        <TextField
          label="Review"
          value={this.state.review}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          multiline
          rows="4"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
