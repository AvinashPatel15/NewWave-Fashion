import {
  LOGIN_DELETE_SUCCESS_MSG,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Auth.ActionTypes";

const token = JSON.parse(localStorage.getItem("newwave")) || null;

const initState = {
  isAuth: token ? token.token : false,
  isSuccess: null,
  isToken: token ? token.token : false,
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
    case LOGIN_DELETE_SUCCESS_MSG:
      return {
        ...state,
        isSuccess: false,
      };
    case LOGOUT:
      localStorage.removeItem("newwave");
      return {
        ...state,
        isAuth: false,
        isToken: false,
        isError: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
