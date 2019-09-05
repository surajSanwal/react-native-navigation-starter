/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/actions/machine.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Friday, August 23rd 2019, 6:46:50 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import * as Types from "../ActionTypes";
import RestClient from "../helpers/RestClient";
import Common from "../helpers/Common";

export const getMachines = () => {
  return (dispatch, getState) => {
    let {
      user: { loginToken }
    } = getState();
    dispatch({ type: Types.MACHINE_LIST_REQUEST });
    RestClient.getCall("machine", loginToken)
      .then(resp => {
        resp = resp.reduce((obj, item) => {
          obj.push({ ...item, value: item.name });
          return obj;
        }, []);
        dispatch({ type: Types.MACHINE_LIST_SUCCESS, payload: resp });
      })
      .catch(e => {
        Common.Dialog(e.message);
        dispatch({ tpe: Types.MACHINE_LIST_FAIL, payload: e });
      });
  };
};
