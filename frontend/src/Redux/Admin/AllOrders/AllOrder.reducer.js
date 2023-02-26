import {
  ERROR_ALL_ORDERS_DATA,
  GET_ALL_ORDERS_DATA,
  LOADING_ALL_ORDERS_DATA,
} from "./AllOrder.actionTypes";

const initialState = {
  allorders: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  isMessage: null,
};

export const allOrdersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_ALL_ORDERS_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_ALL_ORDERS_DATA: {
      return {
        ...state,
        allorders: payload,
        isSuccess: true,
        isLoading: false,
      };
    }

    case ERROR_ALL_ORDERS_DATA: {
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
