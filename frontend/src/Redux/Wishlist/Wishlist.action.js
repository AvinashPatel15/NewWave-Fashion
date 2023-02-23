import {
  DELETE_WISHLIST_ITEM,
  ERROR_DELETE_WISHLIST_ITEM,
  ERROR_WISHLIST_DATA,
  GET_WISHLIST_DATA,
  LOADING_WISHLIST_DATA,
} from "./Wishlist.actionTypes";

export const getWishlistData = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  dispatch({ type: LOADING_WISHLIST_DATA });
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/wishlists`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: token.token || false,
      },
    });
    let data = await res.json();
    dispatch({ type: GET_WISHLIST_DATA, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_WISHLIST_DATA, payload: error });
  }
};

export const deleteWishlistItem = (id) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("newwave")) || false;
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/wishlists/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: token.token || false,
        },
      }
    );
    let data = await res.json();
    dispatch({ type: DELETE_WISHLIST_ITEM, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_DELETE_WISHLIST_ITEM, payload: error });
  }
};
