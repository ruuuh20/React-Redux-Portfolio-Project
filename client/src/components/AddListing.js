import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/listingActions.js'
import AddImageField from './AddImageField'

class AddListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainImgSource: "",
      imgSources: [""],
      numberOfSubImages: 1,
      neighborhood: "",
      realtorId: props.realtorId,
      streetName: "",
      unitNumber: "",
      listingPrice: "",
      beds: "",
      baths: "",
      description: ""
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    debugger
  };

  handleImageFieldChange = (event) => {
    const value = event.target.value
    const index = event.target.name
    let array = this.state.imgSources
    array[index] = value
    this.setState({
      imgSources: array
    })

  }


  render(){
    let sources = this.state.imgSources
    let imageFields = sources.map(
      img => <AddImageField index={sources.indexOf(img)} key={sources.indexOf(img)} imgSource={sources[sources.indexOf(img)]} handleInputChange={this.handleImageFieldChange.bind(this)} />
    )
    return (
      <div>
        <div className="container-fluid row">
          <div className="col-4">
          <form onSubmit = {this.handleFormSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="mainImgSource">Add Source for {`Listing's`} Cover Image</label>
              <input
                type = "text"
                name = "mainImgSource"
                value = {this.state.mainImgSource}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <label>Add sources for additional images</label>
            {imageFields}
            <div className="form-group">
              <label htmlFor="neighborhood">Neighborhood</label>
              <input
                type = "text"
                name = "neighborhood"
                value = {this.state.neighborhood}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="streetName">Street Name</label>
              <input
                type = "text"
                name = "streetName"
                value = {this.state.streetName}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="unitNumber">Unit Number (if applicable)</label>
              <input
                type = "text"
                name = "unitNumber"
                value = {this.state.maxRent}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="listingPrice">Listing Price ($)</label>
              <input
                type = "number"
                name = "listingPrice"
                value = {this.state.maxRent}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="beds">Bedrooms</label>
              <input
                type = "number"
                name = "beds"
                value = {this.state.beds}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
            <label htmlFor="baths">Bathrooms</label>
              <input
                type = "number"
                name = "baths"
                value = {this.state.baths}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
              <textarea
                type = "text"
                name = "description"
                value = {this.state.description}
                onChange = {this.handleInputChange}
                className="form-control"
                rows = "15"
              />
            </div>
            <button type="submit" className="btn btn-primary">Creat Listing</button>
          </form>
        </div>
      </div>
    </div>
    )}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(AddListing)
