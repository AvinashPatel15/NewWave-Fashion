import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/Cart.reducer";
import { orderReducer } from "./Orders/Orders.reducer";
import { productReducer } from "./Products/Products.reducer";
import { wishlistReducer } from "./Wishlist/Wishlist.reducer";

const globalReducer = combineReducers({
  cartReducerData: cartReducer,
  wishlistReducerData: wishlistReducer,
  ordersReducerData: orderReducer,
  productReducerData: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  globalReducer,
  composeEnhancers(applyMiddleware(thunk))
);
