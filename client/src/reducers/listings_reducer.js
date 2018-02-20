export default function listingsReducer(state= {loading: false, listing: {}, listings: [], featuredListings: []}, action) {
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

      //let newState = Object.assign({}, state, { state.listing: Object.assign({}, state.listing, {comments: [action.payload, ...state.listing.comments]})})
      debugger
      let updatedListing = Object.assign({}, state.listing, {comments: [action.payload, ...state.listing.comments]})
      let newState = Object.assign({}, state, {listing: updatedListing})


      return newState
    default:
      return state;
  }

}
