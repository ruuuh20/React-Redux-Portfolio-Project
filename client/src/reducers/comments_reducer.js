export default function commentsReducer(state= {posting: false, comments: []}, action) {
  switch ( action.type ) {
    case 'CREATING_COMMENT':
      console.log("we are in the creating comment reducer")
      return Object.assign({}, state, {posting: true})
    case 'CREATE_COMMENT_SUCCESS':
      console.log("we are in the create comment success reducer")
      return Object.assign({}, state, {posting: false, comment: action.payload})
    default:
      return state;
  }

}
