import React from 'react'
import Listings from './Listings'

const HomePage = (props) => {
  const listings = props.listings

  return (
    <div>
      <Listings listings = {listings} />
    </div>
  )
}

export default HomePage
