import React, { Component } from 'react';
import AddListingForm from '../containers/AddListingForm'

class AddListing extends Component {
  constructor() {
    super()
    this.state = {
      listingCreated: false
    }
  }

  handleListingCreated= () => {
    this.setState({
      listingCreated: true
    })
  }


  render(){
    let view = null
    if (this.state.listingCreated) {view = <p>Listing Created!</p>}
    else {view = <AddListingForm handleListingCreated={this.handleListingCreated}/>}
    return (
      <div>
        {view}
      </div>
    )}
}

export default AddListing
