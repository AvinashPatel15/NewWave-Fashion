import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/Cart.reducer";

const globalReducer = combineReducers({
  cartReducerData: cartReducer,
});

export const store = legacy_createStore(globalReducer, applyMiddleware(thunk));
