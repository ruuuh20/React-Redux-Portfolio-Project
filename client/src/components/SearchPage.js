import React from 'react'
import FeaturedListing from './FeaturedListing'

const SearchPage = (props) => {
  const listings = props.listings

  return (
    <div>
      <div className="scrolling-wrapper-flexbox">
        {listings.map(listing => <FeaturedListing listing = {listing} />)}
      </div>
    </div>
  )
}

export default SearchPage
