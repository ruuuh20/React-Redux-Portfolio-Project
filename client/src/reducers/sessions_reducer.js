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
      return Object.assign({}, state, {sessionRealtorId: action.payload})
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {sessionRealtorId: null})
    default:
      return state;
  }

}
