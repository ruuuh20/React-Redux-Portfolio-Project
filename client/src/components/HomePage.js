import React from 'react'
import FeaturedListing from './FeaturedListing'

const HomePage = (props) => {
  const listings = props.listings

  return (
    <div>
      <h1> Featured Listings </h1>
      <div className="scrolling-wrapper-flexbox">
        {listings.map(listing => <FeaturedListing listing = {listing} />)}
      </div>
    </div>
  )
}

export default HomePage
