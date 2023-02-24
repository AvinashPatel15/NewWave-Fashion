import {
  ERROR_ORDERS_DATA,
  GET_ORDERS_DATA,
  LOADING_ORDERS_DATA,
} from "./Orders.actionTypes";

export const getOrdersData = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  dispatch({ type: LOADING_ORDERS_DATA });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/purchasehistory`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: GET_ORDERS_DATA, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_ORDERS_DATA, payload: error });
  }
};
