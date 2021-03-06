import React, { Component } from 'react';
import Api from '../api/Api'
import RealtorListingsList from './RealtorListingsList'

class ManageListings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      realtorId: props.realtorId,
      listings: [],
      address: ""
    }
  }

  handleSearchChange = (event) => {
    this.setState({address: event.target.value})
    this.searchListing({address: event.target.value})
  }

  searchListing = (address) => {
    Api.loadListing(address, this.state.realtorId, (listings) => {
      this.setState({
        listings: listings
      });
    });
  }


  render(){
    let listings = null
    if (this.state.listings) {
      let array = []
      this.state.listings.map(listing => array.push(listing))
      listings = array
    }
  return (
    <div>
      <div className="form-group col-4">
        <label htmlFor="address">Search Listings by Address</label>
        <input
          type = "text"
          name = "address"
          placeholder = "search address..."
          value = {this.state.address}
          onChange = {this.handleSearchChange}
          className="form-control"
        />
        <small className="form-text text-muted">Search listing by address</small>
      </div>
      <RealtorListingsList listings={listings} />
    </div>
  )}
}


export default ManageListings
