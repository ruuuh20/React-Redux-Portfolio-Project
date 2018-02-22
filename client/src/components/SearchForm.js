import React, { Component } from 'react';
import Api from '../api/Api'
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
    Api.search(this.state, (listings) => {
      this.setState({
        filteredListings: listings
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid row">
          <div className="col-4">
            <form onSubmit = {this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="neighborhood">Search by Neighborhood</label>
                <input
                  type = "text"
                  name = "neighborhood"
                  placeholder = "search neighborhood..."
                  value = {this.state.neighborhood}
                  onChange = {this.handleSearchChange}
                  className="form-control"
                />
                <small className="form-text text-muted">Search by any NYC neighborhood</small>
              </div>
              <div className="form-group">
                <label htmlFor="minRent">Min Rent</label>
                <input
                  type = "text"
                  name = "minRent"
                  placeholder = "no min"
                  value = {this.state.minRent}
                  onChange = {this.handleSearchChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxRent">Max Rent</label>
                <input
                  type = "text"
                  name = "maxRent"
                  placeholder = "no max"
                  value = {this.state.maxRent}
                  onChange = {this.handleSearchChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="beds">Bedrooms</label>
                <input
                  type = "text"
                  name = "beds"
                  placeholder = "0"
                  value = {this.state.beds}
                  onChange = {this.handleSearchChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
              <label htmlFor="baths">Bathrooms</label>
                <input
                  type = "text"
                  name = "baths"
                  placeholder = "0"
                  value = {this.state.baths}
                  onChange = {this.handleSearchChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Search</button>
              </form>
            </div>
            <div className="col-8">
              <SearchResults listings={this.state.filteredListings} />
            </div>
          </div>
      </div>
    );
  }
}

export default SearchForm
