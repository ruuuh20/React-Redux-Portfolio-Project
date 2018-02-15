import React from 'react'
import Listing from './Listing'

const Listings = (props) => {
  const listings = props.listings

  return (
    <div className="scrolling-wrapper-flexbox">
      {listings.map(listing => <Listing listing = {listing} />)}
    </div>
  )
}

export default Listings
