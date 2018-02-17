import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'
import HomePage from './HomePage'
import ListingPage from './ListingPage'
import SearchPage from './SearchPage'

class App extends Component {

  componentDidMount() {
    if (this.props.featured.length === 0) {
      this.props.actions.fetchFeaturedListings()
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
            <Route exact path="/" render={() => <HomePage listings={this.props.featured} />} />
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
  return { featured: state.listings.featuredListings};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
