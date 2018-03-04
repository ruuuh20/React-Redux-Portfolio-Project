import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'
import EditListingForm from './EditListingForm'

class ManageListing extends Component {
  constructor(){
    super()
    this.state = {
      listingDeleted: false,
      listingUpdated: false
    }
  }

  componentDidMount(props) {
    const listingId = parseInt(this.props.match.params.listingId, 10)
    this.props.actions.fetchListing(listingId)}

  deleteListing = () => {
    const listingId = this.props.listing.id
    this.props.actions.deleteListing(listingId)
    this.setState({
      listingDeleted: true
    })
  }

  handleListingUpdated= () => {
    this.setState({
      listingUpdated: true
    })
  }

  render(){
    let view = null
    if (this.state.listingDeleted) {view = <p>Listing Deleted.</p>}
    else if (this.state.listingUpdated) {view = <p>Listing Updated.</p>}
    else {view =
      <div>
        <h6 className="edit-listing-title">{this.props.listing.address}</h6>
        <button onClick= {this.deleteListing.bind(this)} className="delete">Delete Listing</button>
        <EditListingForm listing={this.props.listing} handleListingUpdated={this.handleListingUpdated}/>
      </div>}
    return (
    <div>
      {view}
    </div>
  )}
}

const mapStateToProps = (state, props) => {
  return { listing: state.listings.listing};
};


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListing)
