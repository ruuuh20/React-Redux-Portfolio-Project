import sessionApi from '../api/SessionApi';
// import auth from '../auth/authenticator';

export function loginSuccess(userId) {
  console.log("in loginsuccess action")
  return { type: 'LOGIN_SUCCESS', payload: userId }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log("in loginUser action")
      sessionStorage.setItem('jwt', response.user_id);
      dispatch(loginSuccess(response.user_id));
    }).catch(error => {
      throw(error);
    });
  };
}

export function logoutUser(){
  return (dispatch) => {
    sessionStorage.removeItem('jwt');
    dispatch({type: "LOGOUT_SUCCESS"})
  }
}

// export function logOutUser() {
//   auth.logOut();
//   return {type: 'LOG_OUT'}
// }
