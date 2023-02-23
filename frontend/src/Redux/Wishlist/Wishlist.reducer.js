import {
  DELETE_WISHLIST_ITEM,
  ERROR_DELETE_WISHLIST_ITEM,
  ERROR_WISHLIST_DATA,
  GET_WISHLIST_DATA,
  LOADING_WISHLIST_DATA,
} from "./Wishlist.actionTypes";

const initialState = {
  wishlists: [],
  isMessage: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  loader: false,
};

export const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_WISHLIST_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_WISHLIST_DATA: {
      return {
        ...state,
        wishlists: payload,
        isSuccess: true,
        isLoading: false,
      };
    }
    case ERROR_WISHLIST_DATA: {
      return {
        ...state,
        isMessage: payload,
        isError: true,
        isLoading: false,
      };
    }
    case DELETE_WISHLIST_ITEM: {
      return {
        ...state,
        isMessage: payload,
        isSuccess: true,
        isLoading: false,
      };
    }
    case ERROR_DELETE_WISHLIST_ITEM: {
      return {
        ...state,
        isError: true,
        isMessage: payload,
        isLoading: false,
      }
    }
    default:
      return state;
  }
};
