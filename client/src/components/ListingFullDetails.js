import React, { Component } from 'react';


class ListingFullDetails extends Component {


  render(){
  const listing = this.props.listing
  return (
    <div className="container-fluid">
      <div className="row">
        <div className= "col-6 images-column">
          <img className="main-img img-fluid" src={listing.main_img} alt={listing.address}/>
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <h3 className="listing-title">{listing.address}</h3>
              <h4 className="listing-detail">{listing.neighborhood}</h4>
              <h5 className="listing-detail">{listing.listing_price_formatted}</h5>
              <h6 className="listing-detail">{listing.beds} {listing.beds===1? "bed" : "beds"} / {listing.baths} {listing.baths===1? "bath" : "baths"}</h6>
              <button type="button" className="btn viewing-button btn-secondary">Request Viewing</button>
            </div>
          </div>
        </div>

      </div>

    </div>
)}}


export default ListingFullDetails
