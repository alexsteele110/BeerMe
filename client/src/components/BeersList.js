import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 60
  },
  card: {
    display: 'flex',
    justifyContent: 'flex-start',
    '&:hover': {
      boxShadow: theme.shadows[4]
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
    width: 120,
    height: 120
  }
});

class BeersList extends Component {
  renderContent = () => {
    const { classes, listType } = this.props;
    const list = this.props[listType];
    const altImage = 'https://image.flaticon.com/icons/svg/168/168557.svg';

    if (list.isFetching) {
      return <CircularProgress />;
    }

    if (list.data.length === 0) {
      return <Typography type="headline">No results. Try again.</Typography>;
    }

    return list.data.map(beer => {
      return (
        <Grid item xs={12} key={beer.id}>
          <a href={`/beer/${beer.id}`} style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography type="headline">
                    {beer.name}
                  </Typography>
                  <Typography type="subheading" color="secondary">
                    {beer.style ? beer.style.shortName : ''}
                  </Typography>
                  <Typography type="body1" color="secondary">
                    <b>Brewed by:</b>{' '}
                    {beer.breweries ? beer.breweries[0].name : 'Unavailable'}
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={beer.labels ? beer.labels.medium : altImage}
                alt="hello"
              />
            </Card>
          </a>
        </Grid>
      );
    });
  };

  render() {
    return (
      <Grid container spacing={24}>
        {this.renderContent()}
      </Grid>
    );
  }
}

BeersList.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ results, suggested }) {
  return { results, suggested };
}

export default withStyles(styles)(connect(mapStateToProps)(BeersList));
