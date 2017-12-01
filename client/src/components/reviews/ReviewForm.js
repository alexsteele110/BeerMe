import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Rating from 'react-rating';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

class ReviewForm extends Component {
  state = { starRating: 0 };

  changeRate(name, value) {
    this.props.change(name, value);
    this.setState({ starRating: value });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="rating" type="hidden" component="input" />
        <Rating
          empty={<StarBorderIcon />}
          full={<StarIcon />}
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

export default reduxForm({
  form: 'review'
})(ReviewForm);
