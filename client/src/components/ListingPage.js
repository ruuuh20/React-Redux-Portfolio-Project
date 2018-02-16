import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'

const ListingPage = ({listing}) =>

    <div>
      {listing.address}
    </div>


const mapStateToProps = (state, ownProps) => {
  const listing = state.listings.listings.find(listing => listing.id === parseInt(ownProps.match.params.listingId))
  if (listing) {
    return {listing}
  }
  else {
    return {listing: {} }
  }
  }


export default connect(mapStateToProps)(ListingPage)
