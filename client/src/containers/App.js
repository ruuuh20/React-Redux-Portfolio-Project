import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listingActions from '../actions/listingActions.js'
import * as realtorActions from '../actions/realtorActions.js'
import HomePage from '../components/HomePage'
import ListingPage from './ListingPage'
import SearchPage from '../components/SearchPage'
import LoginPage from './LoginPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: this.props.session
    }
  }

  componentDidMount() {
    if (this.props.featured.length === 0) {
      this.props.actions.listingActions.fetchFeaturedListings()
    }
    if (this.props.realtors.length === 0) {
      this.props.actions.realtorActions.fetchAllRealtors()
    }
  }
  render() {
    let sessionOption = null
    Object.keys(this.props.session).length === 0 ? sessionOption = "Realtor Login" : sessionOption = "Logout"
    return (
      <div>
        <Router>
          <div>
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
              <NavLink style={{ marginRight: '10px' }} to="/search">Search Listings</NavLink>
              <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
              <NavLink style={{ marginRight: '10px' }} to="/login">{sessionOption}</NavLink>
            </div>
            <Route exact path="/" render={() => <HomePage listings={this.props.featured} realtors={this.props.realtors} />} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" component={LoginPage} />
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
  return { featured: state.listings.featuredListings, realtors: state.realtors.realtors, session: state.sessions.sessionRealtor};
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
