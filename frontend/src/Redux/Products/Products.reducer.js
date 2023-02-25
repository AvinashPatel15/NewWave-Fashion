import {
  CLEAR_SEARCH_PRODUCT_DATA,
  ERROR_GET_PRODUCT_DATA,
  GET_PRODUCTS_DATA,
  LOADING_PRODUCT_DATA,
  SEARCH_PRODUCT_DATA,
} from "./Products.actionTypes";

const initialState = {
  products: [],
  isMessage: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  isSearchProduct: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PRODUCT_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PRODUCTS_DATA: {
      return {
        ...state,
        isLoading: false,
        products: payload,
        isSuccess: true,
      };
    }

    case ERROR_GET_PRODUCT_DATA: {
      return {
        ...state,
        isLoading: false,
        isMessage: payload,
        isError: true,
      };
    }

    case SEARCH_PRODUCT_DATA: {
      return {
        ...state,
        isLoading: false,
        isSearchProduct: payload,
      };
    }

    case CLEAR_SEARCH_PRODUCT_DATA: {
      return {
        ...state,
        isLoading: false,
        isSearchProduct: null,
        products: null,
      };
    }

    default:
      return state;
  }
};
