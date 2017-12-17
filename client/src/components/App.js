import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import SearchPage from './SearchPage';
import BeerDetailsPage from './details/BeerDetailsPage';
import DashboardPage from './dashboard/DashboardPage';
import ReviewPage from './reviews/ReviewPage';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // Made header a route in order to access this.props.location
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/reviews" component={ReviewPage} />
            <Route path="/beer/:beerId" component={BeerDetailsPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
