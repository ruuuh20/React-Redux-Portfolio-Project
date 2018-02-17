import React, { Component } from 'react';
import Client from './Client'
import SearchResults from './SearchResults'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      filteredListings: [],
      neighborhood: ''
    }
  }

  handleSearchChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})

    Client.search(value, (listings) => {
      this.setState({
        filteredListings: listings
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <input
            type = "text"
            name = "neighborhood"
            placeholder = "search neighborhood..."
            value = {this.state.searchValue}
            onChange = {this.handleSearchChange}
          />
        </div>
        <SearchResults listings={this.state.filteredListings} />
      </div>
    );
  }
}

export default SearchForm
