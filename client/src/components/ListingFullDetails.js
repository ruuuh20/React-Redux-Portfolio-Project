import React, { Component } from 'react';
import ViewingRequest from './ViewingRequest.js'
import Comments from '../containers/Comments.js'


class ListingFullDetails extends Component {
  constructor(props){
    super(props)
     this.state = {
       mainImg: props.listing.main_img,
       allImages: props.listing.all_image_sources,
       requestViewingOn: false,
    }
  }

  handleImageChange(image) {
    this.setState({
      mainImg: image
    })
  }

  handleViewingForm(){
    this.setState({
      requestViewingOn: true
    })
  }

  render(){

  const listing = this.props.listing
  let viewingForm = null
  if (this.state.requestViewingOn) {
    viewingForm = <ViewingRequest address={listing.address}/>}
  else {viewingForm = <button type="button" className="btn viewing-button btn-secondary"
            onClick={(event) => {this.handleViewingForm();}}>Request Viewing</button>}
  return (
    <div className="container-fluid">
      <div className="row">
        <div className= "col-6 images-column">
          <img className="main-img img-fluid" src={this.state.mainImg} alt={listing.address}/>
          <div className="row thumbnails-row scrolling-wrapper-flexbox">
            {this.state.allImages ?
              this.state.allImages.map(image =>
              <img
                key={image.id}
                className="thumbnail-image"
                src={image}
                style={this.state.mainImg===image? {opacity: 1} : {}}
                alt={listing.address}
                onClick={() => {
                  this.handleImageChange(image);
                }}
              />) : null}
          </div>
          <div className="row thumbnails-row">
            <div className="summary-header">
              <h4 className="listing-detail">Summary</h4>
            </div>
            <p>{listing.description}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <h3 className="listing-title">{listing.address}</h3>
              <h4 className="listing-detail">{listing.neighborhood}</h4>
              <h5 className="listing-detail">{listing.listing_price_formatted}</h5>
              <h6 className="listing-detail">{listing.beds} {listing.beds===1? "bed" : "beds"} / {listing.baths} {listing.baths===1? "bath" : "baths"}</h6>
              {viewingForm}
              <Comments listingId={listing.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
)}}


export default ListingFullDetails
