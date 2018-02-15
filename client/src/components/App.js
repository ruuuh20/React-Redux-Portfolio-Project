import React, { Component } from 'react';
import Routes from './Routes'
import HomePage from './HomePage'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'

class App extends Component {
  componentDidMount() {
    if (this.props.listings.length === 0) {
      this.props.actions.fetchListings()
    }
  }
  render() {
    return (
      <div className="App">
        <Routes />
        <HomePage listings={this.props.listings} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { listings: state.listings.listings };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
