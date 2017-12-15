import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHelpful } from '../../actions';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';

const styles = theme => ({
  liked: {
    color: '#64b5f6',
    marginLeft: '90%',
    marginTop: -44
  },
  unLiked: {
    marginLeft: '90%',
    marginTop: -44
  },
  number: {
    marginLeft: 10
  }
});

class ThumbsUp extends Component {
  state = {
    helpfulCount: this.props.review.helpful,
    alreadyLiked: this.props.auth.liked.includes(this.props.review._id)
  };

  handleClick = () => {
    const { _id } = this.props.review;
    const { alreadyLiked, helpfulCount } = this.state;
    this.props.updateHelpful(_id);

    this.setState({
      helpfulCount: alreadyLiked ? helpfulCount - 1 : helpfulCount + 1,
      alreadyLiked: !alreadyLiked
    });
  };

  renderIcon() {
    const { classes } = this.props;
    const { alreadyLiked } = this.state;
    return (
      <div>
        <Tooltip title="Helpful?" placement="bottom" enterDelay={300}>
          <IconButton
            onClick={this.handleClick}
            className={alreadyLiked ? classes.liked : classes.unLiked}
          >
            <ThumbUpIcon />

            <h6 className={classes.number}>
              {this.state.helpfulCount}
            </h6>
          </IconButton>
        </Tooltip>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderIcon()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { updateHelpful })(
  withStyles(styles)(ThumbsUp)
);
