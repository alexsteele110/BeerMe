import React, { Component } from 'react';
import { connect } from 'react-redux';
import serialize from 'serialize-javascript';
import { submitReview } from '../../actions';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import RateReviewIcon from 'material-ui-icons/RateReview';
import Tooltip from 'material-ui/Tooltip';
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import ReviewForm from './ReviewForm';

class ReviewDialog extends Component {
  state = {
    open: false
  };

  submit = values => {
    const { beerId } = this.props;
    const serializedDescription = serialize(values.description);
    const review = {
      beerId,
      rating: values.rating,
      description: serializedDescription
    };

    this.props.submitReview(review);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Tooltip title="Add Review" placement="bottom" enterDelay={300}>
          <IconButton onClick={this.handleClickOpen}>
            <RateReviewIcon />
          </IconButton>
        </Tooltip>

        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Review this beer
            <IconButton onClick={this.handleRequestClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Submit your overall rating along with a description.
            </DialogContentText>
            <ReviewForm onSubmit={this.submit} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default connect(null, { submitReview })(ReviewDialog);
