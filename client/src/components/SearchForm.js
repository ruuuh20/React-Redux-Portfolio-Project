import React, { Component } from 'react';
import Client from './Client'
import SearchPage from './SearchPage'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      filteredListings: [],
      searchValue: ''
    }
  }

  handleSearchChange = (event) => {
    let value = event.target.value
    this.setState({searchValue: value})

    Client.search(value, (listings) => {
      this.setState({
        filteredListings: listings
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <input
          type = "text"
          placeholder = "search neighborhood..."
          value = {this.state.searchValue}
          onChange = {this.handleSearchChange}
        />
        <SearchPage listings={this.state.filteredListings} />
      </div>
    );
  }
}

export default SearchForm
