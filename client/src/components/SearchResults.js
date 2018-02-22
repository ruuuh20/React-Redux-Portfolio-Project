import React, {Component} from 'react';
import FilteredListing from './FilteredListing'

class SearchResults extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      listingsIndex: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    var listings = []
    var allListings = nextProps.listings
    while (allListings.length > 0) {
      listings.push(allListings.splice(0, 3))
    }
    if (allListings.length === 0){
      this.setState({
        listings: listings
      })}
  }

  handleNext = () => {
    let newIndex = this.state.listingsIndex + 1
    this.setState({
      listingsIndex: newIndex
    })
  }

  handlePrevious = () => {
    let newIndex = this.state.listingsIndex - 1
    this.setState({
      listingsIndex: newIndex
    })
  }

  render(){
    let listings = this.state.listings
    if (this.state.listings.length >0) {listings = this.state.listings[this.state.listingsIndex]}
    let backButton
    if (this.state.listingsIndex !== 0){backButton =
      <a onClick={this.handlePrevious} className="previous round">&#8249;</a>}
    let forwardButton
    if (this.state.listingsIndex < this.state.listings.length - 1){forwardButton =
      <a onClick={this.handleNext} className="next round">&#8250;</a>}
    return (
      <div>
        <div className="list-buttons">
          {backButton}
          {forwardButton}
        </div>
        <div className="search-results">
  
          {listings.map(listing => <FilteredListing key={listing.id} listing = {listing} />)}
        </div>
      </div>
    )}
}

export default SearchResults
