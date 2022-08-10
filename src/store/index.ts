/* STORE
   ========================================================================== */

import { Provider, useDispatch, useSelector } from "react-redux";
import postDetailReducer, { postDetailActions } from "./post-detail.slice";
import postListReducer, { postListActions } from "./post-list.slice";

import { configureStore } from "@reduxjs/toolkit";

/**
 * Map actions
 */
const actions = {
  postList: postListActions,
  postDetail: postDetailActions,
};

/**
 * Map reducers
 */
const reducers = {
  postList: postListReducer,
  postDetail: postDetailReducer,
};

const store = configureStore({
  reducer: reducers,
});

export type TStore = ReturnType<typeof store.getState>;

/**
 * Export all neccessary features here to modulize,
 * so that all store features can be imported from 'store',
 * instead of importing from 'react-redux' and 'redux-toolkit' and so on
 */
export { Provider, useDispatch, useSelector, actions };

export default store;
