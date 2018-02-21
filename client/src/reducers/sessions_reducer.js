import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export default function sessionsReducer(state= {sessionRealtorId: null}, action) {
  switch ( action.type ) {
    case 'LOGIN_SUCCESS':
      console.log("in login_success case reducer")
      console.log(`action.paylod is ${action.payload}`)
      console.log(sessionStorage.jwt)
      return Object.assign({}, state, {sessionRealtorId: action.payload})
    case 'LOGOUT_SUCCESS':
    console.log("in logout_success case reducer")
      console.log(sessionStorage.jwt)
      return Object.assign({}, state, {sessionRealtorId: null})
    default:
      return state;
  }

}
