/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/actions/service.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Friday, August 23rd 2019, 6:46:45 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import * as Types from "../ActionTypes";
import RestClient from "../helpers/RestClient";
export const getServiceType = data => {
  return (dispatch, getState) => {
    let {
      user: { loginToken }
    } = getState();
    dispatch({ type: Types.FORGOT_PASSWORD_REQUEST });
    RestClient.restCall("user/forgot-password", data, loginToken, "PUT")
      .then(resp => {
        dispatch({ type: Types.FORGOT_PASSWORD_SUCCESS, payload: resp });
      })
      .catch(e => dispatch({ type: Types.FORGOT_PASSWORD_FAIL, payload: e }));
  };
};
