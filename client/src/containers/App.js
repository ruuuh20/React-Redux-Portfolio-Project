import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listingActions from '../actions/listingActions.js'
import * as realtorActions from '../actions/realtorActions.js'
import HomePage from '../components/HomePage'
import ListingPage from './ListingPage'
import SearchPage from '../components/SearchPage'

class App extends Component {

  componentDidMount() {
    if (this.props.featured.length === 0) {
      this.props.actions.listingActions.fetchFeaturedListings()
    }
    if (this.props.realtors.length === 0) {
      this.props.actions.realtorActions.fetchAllRealtors()
    }
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
              <NavLink style={{ marginRight: '10px' }} to="/search">Search Listings</NavLink>
              <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
            </div>
            <Route exact path="/" render={() => <HomePage listings={this.props.featured} realtors={this.props.realtors} />} />
            <Route exact path="/search" component={SearchPage} />
            <Route path={`/listings/:listingId`} component={ListingPage} />
          </div>
        </Router>
        <div className="container-fluid">


        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { featured: state.listings.featuredListings, realtors: state.realtors.realtors};
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      listingActions: bindActionCreators(listingActions, dispatch),
      realtorActions: bindActionCreators(realtorActions, dispatch)
    }
  };
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
