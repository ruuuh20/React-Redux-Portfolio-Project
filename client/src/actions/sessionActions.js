import sessionApi from '../api/SessionApi';
// import auth from '../auth/authenticator';

export function loginUser(credentials) {
  return (dispatch) => {
    return sessionApi.login(credentials).then(response => dispatch({ type: 'LOGIN_SUCCESS', payload: response }))
    }};


// export function logOutUser() {
//   auth.logOut();
//   return {type: 'LOG_OUT'}
// }
