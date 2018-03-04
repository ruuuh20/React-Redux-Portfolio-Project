import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/listingActions.js'
import AddImageField from '../components/AddImageField'

class EditListingForm extends Component {
  constructor() {
    super()
    this.state = {
      id: "",
      realtorId: "",
      mainImgSource: "",
      imgSources: "",
      neighborhood: "",
      address: "",
      listingPrice: "",
      beds: "",
      baths: "",
      description: ""
    }
  }

  componentWillReceiveProps(nextProps){
    const listing = nextProps.listing
    this.setState({
      id: listing.id,
      realtorId: listing.realtor_id,
      mainImgSource: listing.main_img,
      imgSources: listing.all_image_sources,
      neighborhood: listing.neighborhood,
      address: listing.address,
      listingPrice: listing.listing_price,
      beds: listing.beds,
      baths: listing.baths,
      description: listing.description
    })
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.actions.updateListing(this.state)
    this.props.handleListingUpdated()
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

  handleAddImage = (event) => {
    event.preventDefault()
    let array = this.state.imgSources
    array.push("")
    this.setState({
      imgSources: array
    })
  }

  handleRemoveInput = (event) => {
    event.preventDefault()
    const index = event.target.name
    let array = this.state.imgSources
    array.splice(index, 1)
    this.setState({
      imgSources: array
    })
  }


  render(){
    let sources = this.state.imgSources
    let imageFields = null
    if (sources) {imageFields = sources.map(
      img => <AddImageField
      index={sources.indexOf(img)}
      key={sources.indexOf(img)}
      imgSource={sources[sources.indexOf(img)]}
      handleInputChange={this.handleImageFieldChange.bind(this)}
      handleRemoveInput={this.handleRemoveInput.bind(this)}/>
    )}
    return (
      <div>
        <div className="container-fluid row">
          <div className="col-4">
          <form onSubmit = {this.handleFormSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="mainImgSource">Lisiting cover image source</label>
              <input
                type = "text"
                name = "mainImgSource"
                value = {this.state.mainImgSource}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <label>Additional images</label>
            {imageFields}
            <button onClick={this.handleAddImage.bind(this)} className="btn btn-secondary add-image">Add Another Image</button>
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
              <label htmlFor="address">Address</label>
              <input
                type = "text"
                name = "address"
                value = {this.state.address}
                onChange = {this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="listingPrice">Listing Price ($)</label>
              <input
                type = "number"
                name = "listingPrice"
                value = {this.state.listingPrice}
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
            <button type="submit" className="btn btn-primary">Update Listing</button>
          </form>
        </div>
      </div>
    </div>
    )}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(EditListingForm)
