import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./Auth.ActionTypes";

export const Login = (loginData) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, loginData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED, payload: error.response.data.message });
    });
};

export const Logout = () => ({ type: LOGOUT });
