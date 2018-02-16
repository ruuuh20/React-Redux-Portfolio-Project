import React, { Component } from 'react';
import Routes from './Routes'
import HomePage from './HomePage'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'
import Client from './Client'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredListings: [],
      searchValue: ''
    }
  }

  handleSearchChange = (event) => {
    let value = event.target.value
    this.setState({searchValue: value})

    Client.search(value, (listings) => {
      this.setState({
        filteredListings: listings
      });
    });
  }
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
      <div className="container-fluid">
        <Routes />
        <h1> Featured Listings </h1>
        <HomePage listings={this.props.featured} />
        <input
          type = "text"
          placeholder = "search neighborhood..."
          value = {this.state.searchValue}
          onChange = {this.handleSearchChange}
        />
        <HomePage listings={this.state.filteredListings} />
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
