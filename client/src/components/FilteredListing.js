import React from 'react';

const FilteredListing = ({listing}) => {
  return (
    <a className="row filtered-listing"href={`/listings/${listing.id}`}>
      <div className="col-6 filtered-listing-img">
        <img className="img-fluid" src={listing.main_img} alt={listing.address}/>
      </div>
      <div className="filtered-listing-details col-6">
        <h5 className="listing-title">{listing.address}</h5>
        <p>{listing.neighborhood}</p>
        <p>{listing.listing_price_formatted}</p>
        <p>{listing.beds} {listing.beds===1? "bed" : "beds"} / {listing.baths} {listing.baths===1? "bath" : "baths"}</p>
      </div>
    </a>
  )
}

export default FilteredListing
