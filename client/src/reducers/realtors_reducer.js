export default function realtorsReducer(state= {loading: false, realtors: [], realtor: {}}, action) {
  switch ( action.type ) {
    case 'LOADING_REALTORS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_REALTORS':
      return Object.assign({}, state, {loading: false, realtors: action.payload})
    case 'LOADING_REALTOR':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_REALTOR':
      return Object.assign({}, state, {loading: false, realtor: action.payload})
    default:
      return state;
  }

}
