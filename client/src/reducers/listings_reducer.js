export default function listingsReducer(state= {loading: false, listings: [], featuredListings: []}, action) {
  switch ( action.type ) {
    case 'LOADING_LISTINGS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LISTINGS':
      console.log("fetching listings")
      return Object.assign({}, state, {loading: false, listings: action.payload})
    case 'LOADING_FEATURED_LISTINGS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_FEATURED_LISTINGS':
      console.log("fetchinf featured listings")
      return Object.assign({}, state, {loading: false, featuredListings: action.payload})
    default:
      return state;
  }

}
