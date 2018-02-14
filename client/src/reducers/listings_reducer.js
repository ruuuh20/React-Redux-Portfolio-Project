export default function listingsReducer(state= {loading: false, listings: []}, action) {
  switch ( action.type ) {
    case 'LOADING_LISTINGS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_LISTINGS':
      return {loading: false, listings: action.payload}
    default:
      return state;
  }

}
