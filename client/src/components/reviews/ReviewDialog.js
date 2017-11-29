import React, { Component } from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <NoteAddIcon />
        </IconButton>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Add a Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Submit your overall rating, along with a description of what you
              did and did not like about this beer.
            </DialogContentText>
            <ReviewForm />
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
