import {
  ADD_TO_CART,
  DEC_CART_QUANTITY,
  DELETE_CART_ITEM,
  ERROR_ADD_TO_CART,
  ERROR_CART_DATA,
  ERROR_QUANTITY,
  GET_CART_DATA,
  LOADING_CART_DATA,
} from "./Cart.actionTypes";

export const getCartData = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  dispatch({ type: LOADING_CART_DATA });
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

export const addToCart = (id) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/carts/post/${id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_ADD_TO_CART, payload: error });
  }
};

export const decCartQuantity = (id) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/carts/remove/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: DEC_CART_QUANTITY, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_QUANTITY, payload: error });
  }
};

export const deleteCartItem = (id) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/carts/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: DELETE_CART_ITEM, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_ADD_TO_CART, payload: error });
  }
};
