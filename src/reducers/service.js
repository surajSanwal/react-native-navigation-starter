import * as Types from "../ActionTypes";
const initialState = {
  serviceList: []
};
const service = (state = initialState, action) => {
  switch (action.type) {
    case Types.SERVICE_TYPE_SUCCESS:
      return { ...state, serviceList: action.payload };
    case Types.LOGOUT_SUCCESS:
      return { ...initialState };
    case Types.LOGOUT_FAIL:
      return { ...initialState };
    default:
      return state;
  }
};

export default service;
