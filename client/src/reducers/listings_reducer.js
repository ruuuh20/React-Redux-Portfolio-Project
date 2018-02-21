export default function listingsReducer(state= {posting: false, loading: false, listing: {}, listings: [], featuredListings: []}, action) {
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
    case 'CREATING_LISTING':
      return Object.assign({}, state, {posting: true})
    case 'CREATE_LISTING_SUCCESS':
      return Object.assign({}, state, {posting: false, listings: state.listings.concat(action.payload)})
    default:
      return state;
  }

}
