export default function realtorsReducer(state= {loading: false, realtors: []}, action) {
  switch ( action.type ) {
    case 'LOADING_REALTORS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_REALTORS':
      return Object.assign({}, state, {loading: false, realtors: action.payload})
    default:
      return state;
  }

}
