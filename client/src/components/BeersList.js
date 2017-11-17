import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'flex-start'
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
    width: 251,
    height: 251
  }
});

class BeersList extends Component {
  renderContent = () => {
    const { classes } = this.props;
    if (this.props.beers.length === 0) {
      return (
        <div>
          <h3>No content yet</h3>
        </div>
      );
    }
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">
                {this.props.beers.name}
              </Typography>
              <Typography type="subheading" color="secondary">
                {this.props.beers.description}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={this.props.beers.labels.medium}
            title="Live from space album cover"
          />
        </Card>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderContent()}
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
