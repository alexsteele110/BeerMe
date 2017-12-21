import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { submitReview } from '../../actions';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import RateReviewIcon from 'material-ui-icons/RateReview';
import Tooltip from 'material-ui/Tooltip';
import Snackbar from 'material-ui/Snackbar';
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import ReviewForm from './ReviewForm';

const styles = theme => ({
  clickable: {
    color: '#3E997E'
  },
  close: {
    float: 'right',
    marginTop: -24,
    marginRight: -24
  }
});

class ReviewDialog extends Component {
  state = {
    dialogOpen: false,
    alertOpen: false
  };

  submit = values => {
    const { beerId, beerName } = this.props;
    const review = {
      beerId,
      beerName,
      rating: values.rating,
      description: values.description
    };

    this.props.submitReview(review);
    this.setState({ alertOpen: true, dialogOpen: false });
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleRequestClose = (event, reason) => {
    this.setState({ dialogOpen: false });

    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alertOpen: false });
  };

  render() {
    const { auth, classes, beerId, beerName } = this.props;
    const allowedToReview = auth.reviewed.includes(beerId);

    if (!allowedToReview) {
      return (
        <div>
          <Tooltip title="Add Review" placement="bottom" enterDelay={300}>
            <IconButton onClick={this.handleClickOpen}>
              <RateReviewIcon className={classes.clickable} />
            </IconButton>
          </Tooltip>
          <Dialog open={this.state.dialogOpen}>
            <DialogTitle>
              Review this beer
              <IconButton
                className={classes.close}
                onClick={this.handleRequestClose}
              >
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
    } else {
      return (
        <div>
          <Tooltip title="Already reviewed" placement="bottom" enterDelay={300}>
            <div>
              <IconButton disabled>
                <RateReviewIcon />
              </IconButton>
            </div>
          </Tooltip>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={this.state.alertOpen}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            SnackbarContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">Review submitted</span>}
          />
        </div>
      );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { submitReview })(
  withStyles(styles)(ReviewDialog)
);
