import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/listingActions.js'
import ListingFullDetails from '../components/ListingFullDetails'

class ListingPage extends Component {

  componentDidMount() {
    const listingId = parseInt(this.props.match.params.listingId, 10)
    this.props.actions.fetchListing(listingId)}

  render() {
    return (
      <div>
        <ListingFullDetails key={this.props.listing.id} listing={this.props.listing}/>
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
