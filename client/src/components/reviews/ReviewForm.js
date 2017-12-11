import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Rating from 'react-rating';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
  star: {
    color: '#EC8C19'
  },
  button: {
    marginTop: 30,
    float: 'right'
  }
});

const validate = values => {
  const errors = {};
  if (!values.rating) {
    errors.description = 'Rating required';
  }
  if (!values.description) {
    errors.description = 'Review required';
  } else if (values.description.length > 300) {
    errors.description = '300 characters or less';
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    label={label}
    error={touched && error}
    helperText={touched && error}
    multiline
    fullWidth
    rows="4"
    {...input}
    {...custom}
  />;

class ReviewForm extends Component {
  state = { starRating: 0 };

  changeRate(name, value) {
    this.props.change(name, value);
    this.setState({ starRating: value });
  }

  render() {
    const { handleSubmit, pristine, submitting, classes } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="rating" type="hidden" component="input" />
        <Rating
          empty={<StarBorderIcon className={classes.star} />}
          full={<StarIcon className={classes.star} />}
          onClick={rate => {
            this.changeRate('rating', rate);
          }}
          initialRate={this.state.starRating}
        />
        <div>
          <div>
            <Field
              name="description"
              label="Review"
              component={renderTextField}
            />
          </div>
        </div>

        <div>
          <Button
            className={classes.button}
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: 'review',
  validate
})(ReviewForm);

export default withStyles(styles)(ReviewForm);
