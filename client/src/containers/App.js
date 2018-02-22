import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listingActions from '../actions/listingActions.js'
import * as realtorActions from '../actions/realtorActions.js'
import * as sessionActions from '../actions/sessionActions.js'
import HomePage from '../components/HomePage'
import ListingPage from './ListingPage'
import SearchPage from '../components/SearchPage'
import LoginPage from './LoginPage'
import RealtorDashboard from './RealtorDashboard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: this.props.loggedInRealtor
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      session: nextProps.loggedInRealtor
    })
  }

  handleOnClick() {
    if (this.props.loggedInRealtor){
      this.props.actions.sessionActions.logoutUser()
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
    let loggedIn = false
    if (this.props.loggedInRealtor){
      sessionOption = "Logout"
      loggedIn = true
    }
    else {
      sessionOption = "Realtor Login"
      loggedIn = false
    }
    return(
      <div>
        <Router>
          <div>
            <div className="navbar">
              <p>NYC Apartment Search</p>
              <NavLink onClick= {this.handleOnClick.bind(this)} to="/login">{sessionOption}</NavLink>
            </div>
            <div className="subnav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/search">Search Listings</NavLink>
            </div>
            <Route exact path="/" render={() => (loggedIn ? (<RealtorDashboard realtorId = {this.state.session}/>) :
              (<HomePage listings={this.props.featured} realtors={this.props.realtors} />))} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" render={() => (loggedIn ?
              (<Redirect to="/dashboard"/>) :
              (<LoginPage/>))}/>
            <Route path="/dashboard" render={() => (!loggedIn ?
              (<Redirect to="/login"/>) :
              (<RealtorDashboard realtorId = {this.state.session} />))}/>
            <Route path={`/listings/:listingId`} component={ListingPage} />
          </div>
        </Router>
        <div className="container-fluid">

        </div>
      </div>)
  }
}


const mapStateToProps = (state) => {
  return { featured: state.listings.featuredListings,
    realtors: state.realtors.realtors,
    loggedInRealtor: state.sessions.sessionRealtorId};
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      listingActions: bindActionCreators(listingActions, dispatch),
      realtorActions: bindActionCreators(realtorActions, dispatch),
      sessionActions: bindActionCreators(sessionActions, dispatch)
    }
  };
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
