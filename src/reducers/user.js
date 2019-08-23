import * as Types from "../ActionTypes";
const initialState = {
  isLogin: false
};
const User = (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGNUP_SUCCESS:
      return { ...state, ...action.payload };
    case Types.LOGIN_SUCCESS:
      return { ...state, ...action.payload, isLogin: true };
    case Types.LOGOUT_SUCCESS:
      return { ...initialState };
    case Types.LOGOUT_FAIL:
      return { ...initialState };
    default:
      return state;
  }
};

export default User;
