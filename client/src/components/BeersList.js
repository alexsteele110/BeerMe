import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
    marginLeft: '20%',
    marginRight: '20%'
  },
  card: {
    display: 'flex',
    justifyContent: 'flex-start',
    '&:hover': {
      boxShadow: theme.shadows[6],
      cursor: 'pointer'
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
        <Grid item xs={12} key={beer.id}>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography type="headline">
                  {beer.name}
                </Typography>
                <Typography type="subheading" color="secondary">
                  {beer.style.name}
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={beer.labels ? beer.labels.medium : altImage}
              alt="hello"
            />
          </Card>
        </Grid>
      );
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={16}>
          {this.renderContent()}
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
