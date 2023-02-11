import axios from "axios";

export const Login = (loginData) => async (dispatch) => {
  try {
    let { data } = axios.post(
      "https://new-wave-fashion-server.cyclic.app/users/login",
      loginData
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
