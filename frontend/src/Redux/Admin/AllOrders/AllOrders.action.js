import {
  ERROR_ALL_ORDERS_DATA,
  GET_ALL_ORDERS_DATA,
  LOADING_ALL_ORDERS_DATA,
} from "./AllOrder.actionTypes";

export const getAllOrdersData = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  dispatch({ type: LOADING_ALL_ORDERS_DATA });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/purchasehistory/all-orders`,
      {
        headers: {
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: GET_ALL_ORDERS_DATA, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_ALL_ORDERS_DATA, payload: error });
  }
};
