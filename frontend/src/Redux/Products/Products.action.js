import {
  ERROR_GET_PRODUCT_DATA,
  GET_PRODUCTS_DATA,
  LOADING_PRODUCT_DATA,
} from "./Products.actionTypes";

export const getProductData =
  (gender, search = "") =>
  async (dispatch) => {
    dispatch({ type: LOADING_PRODUCT_DATA });
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/products?q=${search}&gender=${gender}`,
        { method: "GET" }
      );
      let data = await res.json();
      dispatch({ type: GET_PRODUCTS_DATA, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_GET_PRODUCT_DATA, payload: error });
    }
  };
