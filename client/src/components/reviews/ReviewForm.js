import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Rating from 'react-rating';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
  star: {
    color: '#EC8C19'
  }
});

class ReviewForm extends Component {
  state = { starRating: 0 };

  changeRate(name, value) {
    this.props.change(name, value);
    this.setState({ starRating: value });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props;
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
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: 'review'
})(ReviewForm);

export default withStyles(styles)(ReviewForm);
