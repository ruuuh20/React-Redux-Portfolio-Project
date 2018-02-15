import React from 'react'

const Listing = (props) => {
  const listing = props.listing

  return (
    <div>
    {listing.address}
    </div>
  )
}

export default Listing
