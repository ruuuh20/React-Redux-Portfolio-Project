import React from 'react'
import {Link} from 'react-router-dom'

const RealtorListingsList = ({listings}) => {

  return (
    <div>
      <ul>
        {listings.map(listing =>
          <li key={listing.id}>
            <Link to={`/dashboard/managelistings/${listing.id}`}>
              {listing.address}
            </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default RealtorListingsList
