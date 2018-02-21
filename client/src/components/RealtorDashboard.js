import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as realtorActions from '../actions/realtorActions.js'
import * as listingActions from '../actions/listingActions.js'

class RealtorDashboard extends Component  {

  constructor(props){
    super(props);
    this.state = {
      realtorId: props.realtorId,
      realtor: props.realtor,
      currentListings: props.listings
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
      currentListings: nextProps.listings
    })
  }

  render (){
  return (
    <div>
      {`listings: ${this.state.currentListings}`}
      {this.state.realtor.id}
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
