const initialState = {};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Auth;
