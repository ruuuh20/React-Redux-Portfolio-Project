export default function listingsReducer(state= {updating: false, deleting: false, posting: false, loading: false, listing: {}, listings: [], featuredListings: []}, action) {
  switch ( action.type ) {
    case 'LOADING_LISTINGS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LISTINGS':
      return Object.assign({}, state, {loading: false, listings: action.payload})
    case 'LOADING_FEATURED_LISTINGS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_FEATURED_LISTINGS':
      return Object.assign({}, state, {loading: false, featuredListings: action.payload})
    case 'LOADING_SINGLE_LISTING':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_SINGLE_LISTING':
      return Object.assign({}, state, {loading: false, listing: action.payload})
      case "CREATE_COMMENT_SUCCESS":
      let updatedListing = Object.assign({}, state.listing, {comments: [action.payload, ...state.listing.comments]})
      let newState = Object.assign({}, state, {listing: updatedListing})
      return newState
    case 'CREATING_LISTING':
      return Object.assign({}, state, {posting: true})
    case 'CREATE_LISTING_SUCCESS':
      return Object.assign({}, state, {posting: false, listings: state.listings.concat(action.payload)})
    case 'UPDATING_LISTING':
      return Object.assign({}, state, {updating: true})
    case 'UPDATE_LISTING_SUCCESS':
      const indexOfUpdatedListing = state.listings.findIndex(listing => {return listing.id === action.payload.id})
      let listings = state.listings.splice(indexOfUpdatedListing, 1)
      listings.concat(action.payload)
      return Object.assign({}, state, {updating: false, listings: listings, listing: {}})
    case 'DELETING_LISTING':
      return Object.assign({}, state, {deleting: true})
    case 'DELETE_LISTING_SUCCESS':
      const indexOfDeletedListing = state.listings.findIndex(listing => {return listing.id === action.deletedListing})
      return Object.assign({}, state, {deleting: false, listings: state.listings.splice(indexOfDeletedListing, 1), listing: {}})
    default:
      return state;
  }

}
