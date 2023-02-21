import {
  ERROR_CART_DATA,
  GET_CART_DATA,
  LOADING_CART_DATA,
} from "./Cart.actionTypes";

export const getCartData = () => async (dispatch) => {
  dispatch({ type: LOADING_CART_DATA });
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/carts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: token.token || false,
      },
    });
    let data = await res.json();
    dispatch({ type: GET_CART_DATA, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_CART_DATA, payload: error });
  }
};
