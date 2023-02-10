import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "./Auth.ActionTypes";

const token = JSON.parse(localStorage.getItem("newwave")) || null;

const initState = {
  isAuth: token.token || false,
  isSuccess: null,
  isToken: token.token || false,
  isError: false,
  isLoading: false,
};

export const AuthReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("newwave", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isToken: payload.token,
        isSuccess: payload.message,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isError: payload.message,
        isLoading: false,
        isAuth: false,
        isToken: false,
      };
    default:
      return state;
  }
};
