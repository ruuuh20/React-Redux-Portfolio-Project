import React, { Component } from 'react';
import Routes from './Routes'
import HomePage from './HomePage'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'

class App extends Component {
  componentDidMount() {
    if (this.props.listings.length === 0) {
      this.props.actions.fetchAllListings()
    }
    if (this.props.featured.length === 0) {
      this.props.actions.fetchFeaturedListings()
    }
  }
  render() {
    return (
      <div className="App">
        <Routes />
        <h1> Featured Listings </h1>
        <HomePage listings={this.props.featured} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { listings: state.listings.listings, featured: state.listings.featuredListings};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
