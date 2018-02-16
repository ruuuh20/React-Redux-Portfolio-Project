import React from 'react'
import FeaturedListing from './FeaturedListing'

const HomePage = (props) => {
  const listings = props.listings

  return (
    <div>
      <div className="scrolling-wrapper-flexbox">
        <h1> Featured Listings </h1>
        {listings.map(listing => <FeaturedListing listing = {listing} />)}
      </div>
    </div>
  )
}

export default HomePage
