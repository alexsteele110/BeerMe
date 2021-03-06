import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails } from '../../actions';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Rating from 'react-rating';
import Grid from 'material-ui/Grid';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';
import ReviewDialog from '../reviews/ReviewDialog';
import SnackbarAlert from '../SnackbarAlert';
import withLoader from '../hocs/withLoader';

const styles = theme => ({
  card: {
    maxWidth: 512,
    margin: 100
  },
  media: {
    height: 312
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary[700],
    color: 'white'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  flexGrow: {
    flex: '1 1 auto'
  },
  rating: {
    float: 'right',
    color: '#EC8C19',
    marginRight: 20
  }
});

class BeerCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  getUserRating() {
    const { data } = this.props.reviews;
    const { classes } = this.props;
    let total = 0;

    data.forEach(review => (total += review.rating));
    const userRating = Math.round(total / data.length);

    return (
      <div className={classes.rating}>
        <Rating
          initialRate={data.length === 0 ? 0 : userRating}
          readonly
          empty={<StarBorderIcon />}
          full={<StarIcon />}
        />
        <Typography type="caption">
          {data.length === 0
            ? 'No reviews yet'
            : `Based on ${data.length} review(s)`}
        </Typography>
      </div>
    );
  }

  renderCard = () => {
    const { classes, auth } = this.props;
    const { data } = this.props.beerDetails;
    const altImage = 'https://image.flaticon.com/icons/svg/168/168557.svg';

    return (
      <Grid container justify="space-between" spacing={24}>
        <Grid item xs={12} md={5}>
          <Card>
            <Grid container spacing={24}>
              <Grid item xs={7}>
                <CardHeader
                  title={data.name}
                  subheader={data.breweries[0].name}
                />
              </Grid>
              <Grid item xs={5}>
                {this.getUserRating()}
              </Grid>
            </Grid>
            <CardMedia
              className={classes.media}
              image={data.labels ? data.labels.large : altImage}
              title={data.name}
            />
            <CardContent>
              <div className={classes.row}>
                <Chip
                  className={classes.chip}
                  label={data.abv ? `ABV: ${data.abv}%` : 'ABV: N/A'}
                />
                <Chip
                  className={classes.chip}
                  label={data.ibu ? `IBU: ${data.ibu}` : 'IBU: N/A'}
                />
                <Chip
                  className={classes.chip}
                  label={`Organic: ${data.isOrganic}`}
                />
              </div>
            </CardContent>
            <CardActions>
              {auth ? <SnackbarAlert /> : ''}
              {auth
                ? <ReviewDialog beerId={data.id} beerName={data.name} />
                : ''}
              <div className={classes.flexGrow} />
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                {data.description ? <ExpandMoreIcon /> : ''}
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout={700} unmountOnExit>
              <CardContent>
                <Typography type="body1">
                  {data.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography type="display1" gutterBottom>
            Style
          </Typography>
          <Typography type="headline" gutterBottom>
            {data.style.name}
          </Typography>
          <br />
          <Typography type="subheading">
            {data.style.description}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  render() {
    return (
      <div>
        {this.renderCard()}
      </div>
    );
  }
}

BeerCard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ beerDetails, auth, reviews }) {
  return { beerDetails, auth, reviews };
}

export default connect(mapStateToProps, { fetchBeerDetails })(
  withStyles(styles)(withLoader(BeerCard, 'beerDetails'))
);
