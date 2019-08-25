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
export const getServiceType = () => {
  return (dispatch, getState) => {
    let {
      user: { loginToken }
    } = getState();
    dispatch({ type: Types.SERVICE_TYPE_REQUEST });
    RestClient.getCall("service-type", loginToken)
      .then(resp => {
        resp = resp.reduce((obj, item) => {
          obj.push({ ...item, value: item.name });
          return obj;
        }, []);
        dispatch({ type: Types.SERVICE_TYPE_SUCCESS, payload: resp });
      })
      .catch(e => dispatch({ type: Types.SERVICE_TYPE_FAIL, payload: e }));
  };
};
