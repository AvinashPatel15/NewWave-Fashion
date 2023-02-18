import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const globalReducer = combineReducers({});

export const store = legacy_createStore(globalReducer, applyMiddleware(thunk));
