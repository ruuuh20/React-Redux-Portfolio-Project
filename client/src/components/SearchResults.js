import React from 'react';
import FilteredListing from './FilteredListing'

const SearchResults = ({listings}) => {
  return (
    <div className="container-fluid search-results">
      {listings.map(listing => <FilteredListing listing = {listing} />)}
    </div>
  )
}

export default SearchResults
