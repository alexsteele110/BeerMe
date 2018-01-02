import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../hocs/requireAuth';
import { fetchMyReviews } from '../../actions';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FavoritesList from './FavoritesList';
import ReviewsList from '../details/ReviewsList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class DashboardPage extends Component {
  componentDidMount() {
    this.props.fetchMyReviews();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <FavoritesList />
          </Grid>
          <Grid item xs={12}>
            <ReviewsList showName={true} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { fetchMyReviews })(
  withStyles(styles)(requireAuth(DashboardPage))
);
