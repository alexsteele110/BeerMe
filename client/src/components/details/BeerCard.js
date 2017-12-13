import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeerDetails } from '../../actions';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
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
  }
});

class BeerCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderCard = () => {
    const { classes, auth } = this.props;
    const { data } = this.props.beerDetails;
    const altImage = 'https://i.imgur.com/YrNKcpR.png';

    return (
      <Grid container justify="space-between" spacing={24}>
        <Grid item xs={12} md={5}>
          <Card>
            <CardHeader title={data.name} subheader={data.breweries[0].name} />
            <CardMedia
              className={classes.media}
              image={data.labels ? data.labels.large : altImage}
              title={data.name}
            />
            <CardContent>
              <div className={classes.row}>
                <Chip className={classes.chip} label={`ABV: ${data.abv}%`} />
                <Chip className={classes.chip} label={`IBU: ${data.ibu}`} />
                <Chip
                  className={classes.chip}
                  label={`Organic: ${data.isOrganic}`}
                />
              </div>
            </CardContent>
            <CardActions>
              {auth ? <SnackbarAlert /> : ''}
              <ReviewDialog beerId={data.id} />
              <div className={classes.flexGrow} />
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
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

function mapStateToProps({ beerDetails, auth }) {
  return { beerDetails, auth };
}

export default connect(mapStateToProps, { fetchBeerDetails })(
  withStyles(styles)(withLoader(BeerCard, 'beerDetails'))
);
