import React, { Component } from 'react';
import Client from './Client'
import SearchResults from './SearchResults'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      filteredListings: [],
      neighborhood: '',
      minRent: '',
      maxRent: '',
      beds: '',
      baths: ''
    }
  }

  handleSearchChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    Client.search(this.state, (listings) => {
      this.setState({
        filteredListings: listings
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
              <input
                type = "text"
                name = "neighborhood"
                placeholder = "search neighborhood..."
                value = {this.state.neighborhood}
                onChange = {this.handleSearchChange}
              />
              <input
                type = "text"
                name = "minRent"
                placeholder = "no min"
                value = {this.state.minRent}
                onChange = {this.handleSearchChange}
              />
              <input
                type = "text"
                name = "maxRent"
                placeholder = "no max"
                value = {this.state.maxRent}
                onChange = {this.handleSearchChange}
              />
              <input
                type = "text"
                name = "beds"
                placeholder = "0"
                value = {this.state.beds}
                onChange = {this.handleSearchChange}
              />
              <input
                type = "text"
                name = "baths"
                placeholder = "0"
                value = {this.state.baths}
                onChange = {this.handleSearchChange}
              />
              <input
                type = "submit"
                value = "search"
                onClick = {this.handleFormSubmit}
              />
          </div>
          <div className="row">
            <label htmlFor="neighborhood">Search by Neighborhood</label>
            <label htmlFor="minRent">Min Rent</label>
            <label htmlFor="maxRent">Max Rent</label>
            <label htmlFor="beds">Bedrooms</label>
            <label htmlFor="baths">Bathrooms</label>
          </div>
        </div>
        <SearchResults listings={this.state.filteredListings} />
      </div>
    );
  }
}

export default SearchForm
