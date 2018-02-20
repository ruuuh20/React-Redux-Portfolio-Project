export default function sessionsReducer(state= {sessionRealtor: {}}, action) {
  switch ( action.type ) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {sessionRealtor: action.payload})
    default:
      return state;
  }

}
