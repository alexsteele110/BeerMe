import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 60
  },
  card: {
    display: 'flex',
    justifyContent: 'flex-start',
    '&:hover': {
      boxShadow: theme.shadows[6]
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 100,
    height: 100
  }
});

class BeersList extends Component {
  renderContent = () => {
    const { classes, beers } = this.props;
    const altImage = 'https://i.imgur.com/YrNKcpR.png';

    if (beers.length === 0) {
      return (
        <div>
          <h3>No content yet</h3>
        </div>
      );
    }
    return beers.map(beer => {
      return (
        <Grid container spacing={24} key={beer.id}>
          <Grid item xs={12}>
            <Link to={`/beer/${beer.id}`} style={{ textDecoration: 'none' }}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography type="headline">
                      {beer.name}
                    </Typography>
                    <Typography type="subheading" color="secondary">
                      {beer.style.shortName}
                    </Typography>
                    <Typography type="body1" color="secondary">
                      <b>Brewed by:</b> {beer.breweries[0].name}
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={beer.labels ? beer.labels.medium : altImage}
                  alt="hello"
                />
              </Card>
            </Link>
          </Grid>
        </Grid>
      );
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper style={{ height: 501 }}>Filters Here</Paper>
          </Grid>
          <Grid item xs={8}>
            {this.renderContent()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

BeersList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function mapStateToProps({ beers }) {
  return { beers };
}

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(BeersList)
);
