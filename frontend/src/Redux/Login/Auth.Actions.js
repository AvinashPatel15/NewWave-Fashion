import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Auth.ActionTypes";

export const AuthLogin = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/login`,
      loginData
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const Logout = () => ({ type: LOGOUT });
