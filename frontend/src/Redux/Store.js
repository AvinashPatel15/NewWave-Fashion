import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Login/Auth.Reducer";

const globalReducer = combineReducers({
  Login: AuthReducer,
});

export const store = legacy_createStore(globalReducer, applyMiddleware(thunk));
