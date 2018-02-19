import React from 'react'
import FeaturedListing from './FeaturedListing'
import RealtorCard from './RealtorCard'

const HomePage = (props) => {
  const listings = props.listings
  const realtors = props.realtors

  return (
    <div>
      <h1> Featured Listings </h1>
      <div className="scrolling-wrapper-flexbox">
        {listings.map(listing => <FeaturedListing listing = {listing} />)}
      </div>
      <h1> Realtors </h1>
      <div className="row realtors">
        {realtors.map(realtor => <RealtorCard realtor = {realtor} />)}
      </div>
    </div>
  )
}

export default HomePage
