/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/reducers/loader.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Monday, September 2nd 2019, 3:33:09 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import * as Types from "../ActionTypes";
const initialState = {
  machine: false,
  signup: false,
  login: false
};
const loader = (state = initialState, action) => {
  switch (action.type) {
    //loader for machine request
    case Types.MACHINE_LIST_REQUEST:
      return { ...state, machine: true };
    case Types.MACHINE_LIST_SUCCESS:
      return { ...state, machine: false };
    case Types.MACHINE_LIST_FAIL:
      return { ...state, machine: false };
    //loader for login button
    case Types.LOGIN_REQUEST:
      return { ...state, login: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, login: false };
    case Types.LOGIN_FAIL:
      return { ...state, login: false };
    //loader for signup
    case Types.SIGNUP_REQUEST:
      return { ...state, signup: true };
    case Types.SIGNUP_SUCCESS:
      return { ...state, signup: false };
    case Types.SIGNUP_FAIL:
      return { ...state, signup: false };
    //loader for forgot password
    case Types.FORGOT_PASSWORD_REQUEST:
      return { ...state, forgot: true };
    case Types.FORGOT_PASSWORD_SUCCESS:
      return { ...state, forgot: false };
    case Types.FORGOT_PASSWORD_FAIL:
      return { ...state, forgot: false };
    case Types.LOGOUT_FAIL:
      return { ...initialState };
    default:
      return state;
  }
};

export default loader;
