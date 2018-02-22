import React from 'react'
import FeaturedListing from './FeaturedListing'
import RealtorCard from './RealtorCard'

const HomePage = (props) => {
  const listings = props.listings
  const realtors = props.realtors

  return (
    <div className="home-page">
      <h3> Featured Listings </h3>
      <div className="scrolling-wrapper-flexbox">
        {listings.map(listing => <FeaturedListing listing = {listing} />)}
      </div>
      <h3> Realtors </h3>
      <div className="row realtors">
        {realtors.map(realtor => <RealtorCard realtor = {realtor} />)}
      </div>
    </div>
  )
}

export default HomePage
