import React from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ReviewForm from './ReviewForm';

const styles = theme => ({
  card: {
    maxWidth: 512,
    margin: 100
  },
  media: {
    height: 512
  }
});

class BeerDetails extends React.Component {
  state = { expanded: false };

  componentDidMount = () => {
    const { beerId } = this.props.match.params;
    this.props.fetchBeerDetails(beerId);
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderContent = () => {
    const { status, data } = this.props.beerDetails.info;
    const { isFetching } = this.props.beerDetails;
    const altImage = 'https://i.imgur.com/YrNKcpR.png';
    const { classes } = this.props;

    if (isFetching) {
      return <CircularProgress />;
    }

    if (status === 'success') {
      return (
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={data.labels ? data.labels.large : altImage}
              title={data.name}
            />
            <CardContent>
              <Typography type="headline" component="h2">
                {data.name}
              </Typography>
              <Typography type="subheading" gutterBottom>
                {data.breweries[0].name}
              </Typography>
              <Typography type="body1">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <ReviewForm />
            </CardActions>
          </Card>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

BeerDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beerDetails }) {
  return { beerDetails };
}

export default connect(mapStateToProps, { fetchBeerDetails })(
  withStyles(styles)(BeerDetails)
);
