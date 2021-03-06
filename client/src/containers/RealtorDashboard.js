import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as realtorActions from '../actions/realtorActions'
import * as listingActions from '../actions/listingActions'
import ManageListings from '../components/ManageListings'
import AddListing from '../components/AddListing'
import ManageListing from './ManageListing'

class RealtorDashboard extends Component  {

  constructor(props){
    super(props);
    this.state = {
      realtorId: props.realtorId,
      realtor: props.realtor,
      currentListings: props.listings,
    }
  }

  componentDidMount() {
    const realtorId = this.state.realtorId
    this.props.realtorActions.fetchRealtor(realtorId)
    this.props.listingActions.fetchRealtorListings(realtorId)
}

  componentWillReceiveProps(nextProps){
    this.setState({
      realtor: nextProps.realtor,
      currentListings: nextProps.listings,
    })
  }

  render (){
  return (
    <div>
      <Router>
        <div>
          <div style={{ paddingBottom: '10px', marginBottom: '12px' }}>
            <NavLink className="btn btn-secondary" style={{ marginLeft: '20px', marginRight: '10px' }} to="/dashboard/managelistings" >Manage Listings</NavLink>
            <NavLink className="btn btn-secondary" style={{ marginRight: '10px' }} to="/dashboard/addlisting">Add Listing</NavLink>
          </div>
          <Route exact path="/dashboard/managelistings" render={() => <ManageListings realtorId={this.state.realtorId} />}/>
          <Route exact path="/dashboard/addlisting" render={() => <AddListing realtorId={this.state.realtorId} />}/>
          <Route path={`/dashboard/managelistings/:listingId`} component={ManageListing} />
        </div>
      </Router>

    </div>
  )}
}

const mapStateToProps = (state) => {
  return { realtor: state.realtors.realtor, listings: state.listings.listings};
};

function mapDispatchToProps(dispatch) {
  return {
    realtorActions: bindActionCreators(realtorActions, dispatch),
    listingActions: bindActionCreators(listingActions, dispatch),}
}

export default connect(mapStateToProps, mapDispatchToProps)(RealtorDashboard)
