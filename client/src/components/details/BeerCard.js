import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import ReviewDialog from '../reviews/ReviewDialog';

const styles = theme => ({
  card: {
    maxWidth: 512,
    margin: 100
  },
  media: {
    height: 512
  }
});

class BeerDetails extends Component {
  renderContent = () => {
    const { status, data } = this.props.beerDetails.info;
    const { isFetching } = this.props.beerDetails;
    const altImage = 'https://i.imgur.com/YrNKcpR.png';
    const { classes } = this.props;

    console.log(this.props.beerDetails);

    if (isFetching) {
      return <CircularProgress />;
    }

    if (status === 'success') {
      return (
        <div>
          <Card>
            <CardHeader title={data.name} subheader={data.breweries[0].name} />
            <CardMedia
              className={classes.media}
              image={data.labels ? data.labels.large : altImage}
              title={data.name}
            />
            <CardContent>
              <Typography type="body1">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <ReviewDialog />
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

export default connect(mapStateToProps)(withStyles(styles)(BeerDetails));
