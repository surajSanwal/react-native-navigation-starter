import * as Types from "../ActionTypes";
const initialState = {
  machineList: []
};
const machine = (state = initialState, action) => {
  switch (action.type) {
    case Types.MACHINE_LIST_SUCCESS:
      return { ...state, machineList: action.payload };
    case Types.LOGOUT_SUCCESS:
      return { ...initialState };
    case Types.LOGOUT_FAIL:
      return { ...initialState };
    default:
      return state;
  }
};

export default machine;
