import {
  ADD_TO_CART,
  DEC_CART_QUANTITY,
  DELETE_CART_ITEM,
  ERROR_ADD_TO_CART,
  ERROR_CART_DATA,
  ERROR_QUANTITY,
  GET_CART_DATA,
  LOADING_CART_DATA,
  getLoadertotheCart,
} from "./Cart.actionTypes";

const initialState = {
  carts: [],
  isMessage: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  loader: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_CART_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CART_DATA: {
      return {
        ...state,
        carts: payload,
        isMessage: payload,
        isSuccess: true,
        isLoading: false,
      };
    }
    case ERROR_CART_DATA: {
      return {
        ...state,
        isMessage: payload,
        isError: true,
        isLoading: false,
      };
    }
    case DEC_CART_QUANTITY: {
      return {
        ...state,
        isMessage: payload,
        isSuccess: true,
      };
    }
    case ERROR_QUANTITY: {
      return {
        ...state,
        isMessage: payload,
        isError: true,
      };
    }
    case DELETE_CART_ITEM: {
      return {
        ...state,
        isMessage: payload,
        isSuccess: true,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        isSuccess: true,
        isMessage: payload,
      };
    }
    case ERROR_ADD_TO_CART: {
      return {
        ...state,
        isError: true,
        isMessage: payload,
      };
    }
    case getLoadertotheCart: {
      return {
        ...state,
        loader: !state.loader,
      };
    }
    default:
      return state;
  }
};
