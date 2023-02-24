import {
  ERROR_ORDERS_DATA,
  GET_ORDERS_DATA,
  LOADING_ORDERS_DATA,
} from "./Orders.actionTypes";

const initialState = {
  orders: [],
  isMessage: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_ORDERS_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_ORDERS_DATA: {
      return {
        ...state,
        orders: payload,
        isSuccess: true,
        isLoading: false,
      };
    }

    case ERROR_ORDERS_DATA: {
      return {
        ...state,
        isMessage: payload,
        isError: true,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
