import { combineReducers } from "redux";
import { createStore, applyMiddleware } from 'redux';
import { postsReducer } from "./postsReducer";
import thunk from "redux-thunk";
import { loaderReducer } from "./loaderReducer";


export const rootReducer = combineReducers({
	posts: postsReducer,
	loader: loaderReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
