import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'
import ListingFullDetails from './ListingFullDetails'

class ListingPage extends Component {

  componentDidMount() {
    const listingId = parseInt(this.props.match.params.listingId)
    if (Object.keys(this.props.listing).length === 0) {
      this.props.actions.fetchListing(listingId)
  }}
  render() {
    return (
      <div>
        <ListingFullDetails listing={this.props.listing}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { listing: state.listings.listing};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage)
