export default function sessionsReducer(state= {sessionRealtorId: null}, action) {
  switch ( action.type ) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {sessionRealtorId: action.payload})
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {sessionRealtorId: null})
    default:
      return state;
  }

}
