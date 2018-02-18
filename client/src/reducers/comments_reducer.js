export default function commentsReducer(state= {posting: false, loading: false, comments: []}, action) {
  switch ( action.type ) {
    case 'LOADING_COMMENTS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_COMMENTS':
      return Object.assign({}, state, {loading: false, comments: action.payload})
    case 'CREATING_COMMENT':
      return Object.assign({}, state, {posting: true})
    case 'CREATE_COMMENT_SUCCESS':
      return Object.assign({}, state, {posting: false, comments: state.comments.concat(action.payload)})
    default:
      return state;
  }

}
