import React from 'react'

const RealtorListingsList = ({listings}) => {

  return (
    <div>
      <ul>
        {listings.map(listing => <li key={listing.id}>{listing}</li>)}
      </ul>
    </div>
  )
}

export default RealtorListingsList
