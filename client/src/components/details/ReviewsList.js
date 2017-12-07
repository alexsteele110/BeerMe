import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerReviews } from '../../actions';
import Paper from 'material-ui/Paper';

class ReviewsList extends Component {
  async componentDidMount() {
    const beerId = this.props.beerDetails.info.data.id;
    await this.props.fetchBeerReviews(beerId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Paper>Hello everyone.</Paper>
      </div>
    );
  }
}

function mapStateToProps({ suggested, beerDetails }) {
  return { suggested, beerDetails };
}

export default connect(mapStateToProps, { fetchBeerReviews })(ReviewsList);
