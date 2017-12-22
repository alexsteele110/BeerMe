import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchRecentReviews } from '../actions';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import ReviewsList from './details/ReviewsList';
import Footer from './Footer';
import landingInfo from './landingInfo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 12,
    [theme.breakpoints.up('lg')]: {
      margin: '4% 12%'
    }
  },
  banner: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'url(https://i.imgur.com/6ZeEIeM.jpg)',
    height: 270,
    width: '100%',
    paddingTop: 100,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  greeting: {
    color: 'white',
    textDecoration: 'bold'
  },
  largeIcon: {
    height: 120,
    width: 120,
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 6
  },
  container: {
    padding: 40,
    textAlign: 'center',
    height: '100%'
  }
});

class Landing extends Component {
  componentDidMount() {
    this.props.fetchRecentReviews();
  }

  renderInfo = () => {
    const { classes } = this.props;
    return landingInfo.map(({ Icon, description, color, name }) => {
      return (
        <Grid item xs={12} md={4} key={name}>
          <div className={classes.container}>
            <Icon style={{ color }} className={classes.largeIcon} />
            <Typography type="headline" gutterBottom>
              <b>
                {name}
              </b>
            </Typography>
            <Typography type="subheading">
              {description}
            </Typography>
          </div>
        </Grid>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.banner}>
          <Typography className={classes.greeting} type="display3">
            BeerMe
          </Typography>
          <Typography className={classes.greeting} type="headline">
            Serving all of your beer and brewery needs
          </Typography>
          <Button
            component={Link}
            to="/topReviews"
            className={classes.button}
            raised
            color="inherit"
          >
            See top beers
          </Button>
        </Paper>

        <div className={classes.root}>
          <Grid container justify="center" spacing={24}>
            {this.renderInfo()}
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography type="display1">Recent reviews</Typography>
              <ReviewsList showName={true} />
            </Grid>
          </Grid>
        </div>

        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, { fetchRecentReviews })(
  withStyles(styles)(Landing)
);
