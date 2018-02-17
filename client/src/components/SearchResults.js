import React from 'react';
import FilteredListing from './FilteredListing'

const SearchResults = ({listings}) => {
  return (
    <div>
      <div className="search-results">
        {listings.map(listing => <FilteredListing listing = {listing} />)}
      </div>
    </div>
  )
}

export default SearchResults
