import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerReviews } from '../../actions';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';

class ReviewsList extends Component {
  async componentDidMount() {
    const beerId = this.props.beerDetails.id;
    await this.props.fetchBeerReviews(beerId);
  }
  renderReviews() {
    return (
      <div>
        <Paper>{this.props.beers.reviews[0].rating}</Paper>
      </div>
    );
  }
  render() {
    console.log(this.props);
    const { isFetching } = this.props.beers;
    if (isFetching) {
      return (
        <div>
          <CircularProgress size={100} />
        </div>
      );
    }
    return <div>{this.renderReviews()}</div>;
  }
}

function mapStateToProps({ beers, beerDetails }) {
  return { beers, beerDetails };
}

export default connect(mapStateToProps, { fetchBeerReviews })(ReviewsList);
