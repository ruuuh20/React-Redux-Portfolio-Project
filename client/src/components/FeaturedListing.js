import React from 'react'
import {Link} from 'react-router-dom'

const FeaturedListing = (props) => {
  const listing = props.listing

  return (
    <Link className="card col-sm-2 featured-listing"to={`/listings/${listing.id}`}>
      <img className="card-img-top img-fluid" src={listing.main_img} alt={listing.address}/>
      <div className="card-block">
        <h6 className="card-title">{listing.beds} bed/{listing.baths} bath in {listing.neighborhood}</h6>
        <p className="card-text">{listing.listing_price_formatted}/month</p>
      </div>
    </Link>
  )
}

export default FeaturedListing
