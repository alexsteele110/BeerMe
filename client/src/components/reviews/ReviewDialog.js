import React, { Component } from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import RateReviewIcon from 'material-ui-icons/RateReview';
import Tooltip from 'material-ui/Tooltip';
import Dialog, {
  DialogActions,
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
    console.log(values);
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
        <Tooltip title="Add Review" placement="right">
          <IconButton onClick={this.handleClickOpen}>
            <RateReviewIcon />
          </IconButton>
        </Tooltip>

        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Review Beer</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Submit your overall rating along with some praises and criticisms.
            </DialogContentText>
            <ReviewForm onSubmit={this.submit} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="contrast">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ReviewDialog;
