import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'

class ManageListing extends Component {

  componentDidMount(props) {
    debugger
    const listingId = parseInt(this.props.match.params.listingId, 10)
    this.props.actions.fetchListing(listingId)}

  render(){
    return (
    <div>
      {this.props.listing.id}
    </div>
  )}
}

const mapStateToProps = (state) => {
  return { listing: state.listings.listing};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListing)
