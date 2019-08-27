import * as Types from "../ActionTypes";
import RestClient from "../helpers/RestClient";
import { push } from "./";
import { customer, operator, auth } from "../config/Navigator.js";
export const userLogin = user => {
  return dispatch => {
    dispatch({ type: Types.LOGIN_REQUEST });
    RestClient.restCall("user/login", user)
      .then(resp => {
        dispatch({ type: Types.LOGIN_SUCCESS, payload: resp });
        switch (resp.role) {
          case "customer":
            customer();
            return;
          case "operator":
            operator();
            return;
          default:
            auth();
        }
      })
      .catch(e => dispatch({ type: Types.LOGIN_FAIL, payload: e }));
  };
};

export const registerUser = (user, componentId) => {
  return dispatch => {
    dispatch({ type: Types.SIGNUP_REQUEST });
    RestClient.restCall("user", user)
      .then(resp => {
        dispatch({ type: Types.SIGNUP_SUCCESS, payload: resp });
        switch (resp.role) {
          case "customer":
            dispatch(push(componentId, "VerifyCustomer"));
            return;
          case "operator":
            dispatch(push(componentId, "SetupProfile"));
            return;
        }
      })
      .catch(e => dispatch({ type: Types.SIGNUP_FAIL, payload: e }));
  };
};

export const resendVerification = user => {
  return dispatch => {
    dispatch({ type: Types.RESEND_VERIFICATION_REQUEST });
    RestClient.restCall("user/resend-email", user)
      .then(resp => {
        dispatch({ type: Types.RESEND_VERIFICATION_SUCCESS, payload: resp });
      })
      .catch(e =>
        dispatch({ type: Types.RESEND_VERIFICATION_FAIL, payload: e })
      );
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    let {
      user: { loginToken }
    } = getState();
    dispatch({ type: Types.LOGOUT_REQUEST });
    RestClient.restCall("user/logout", {}, loginToken, "DELETE")
      .then(resp => {
        dispatch({ type: Types.LOGOUT_SUCCESS, payload: resp });
        auth();
      })
      .catch(e => {
        dispatch({ type: Types.LOGOUT_FAIL, payload: e });
        auth();
      });
  };
};

/*data={
  "oldPassword": "string",
  "password": "string"
}*/
export const updatePassword = data => {
  return (dispatch, getState) => {
    let {
      user: { loginToken }
    } = getState();
    dispatch({ type: Types.UPDATE_PASSWORD_REQUEST });
    RestClient.restCall("user/password", data, loginToken, "PUT")
      .then(resp => {
        dispatch({ type: Types.UPDATE_PASSWORD_SUCCESS, payload: resp });
      })
      .catch(e => dispatch({ type: Types.UPDATE_PASSWORD_FAIL, payload: e }));
  };
};

/*data={
  "email": "string",
  "type": "string"
}*/
export const forgotPassword = data => {
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
