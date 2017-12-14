import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHelpful } from '../../actions';
import IconButton from 'material-ui/IconButton';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';

class ThumbsUp extends Component {
  state = {
    helpfulCount: this.props.review.helpful,
    alreadyLiked: this.props.auth.liked.includes(this.props.reviewId)
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
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <ThumbUpIcon />
        </IconButton>
        <h3>
          {this.state.helpfulCount}
        </h3>
      </div>
    );
  }

  render() {
    console.log(this.props);
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

export default connect(mapStateToProps, { updateHelpful })(ThumbsUp);
