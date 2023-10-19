import { LOGIN_USER,REGISTER_USER } from "../actions/userAction";


const initialState = {
  loginResult: false,
  loginLoading: false,
  loginError: false,

  registerResult: false,
  registerLoading: false,
  registerError: false,
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
      case REGISTER_USER:
      return {
        ...state,
        registerResult: action.payload.data,
        registerLoading: action.payload.loading,
        registerError: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default users;
