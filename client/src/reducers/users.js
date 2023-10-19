import { LOGIN_USER } from "../actions/userAction";

const initialState = {
  loginResult: false,
  loginLoading: false,
  loginError: false,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginResult: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default users;
