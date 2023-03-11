import {legacy_createStore, applyMiddleware} from "redux";// no me deja createStore
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from"../reducer"; 


export const store= legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))