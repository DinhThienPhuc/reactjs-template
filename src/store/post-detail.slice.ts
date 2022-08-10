/* SLICE: POST_DETAIL
   ========================================================================== */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IPostData } from "api/post/post.interface";
import { getPostById } from "api/post/post.api";

const initialState = {
  data: {} as IPostData,
  isLoading: false,
  error: "",
};

/**
 * Async actions for post-detail
 */
const actions = {
  fetchDetail: createAsyncThunk(
    "POST/FETCH_DETAIL",
    async (id: string, { rejectWithValue }) => {
      const response = await getPostById(id);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data as unknown as IPostData;
    }
  ),
};

/**
 * Slice for post-detail
 */
const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.fetchDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.fetchDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(actions.fetchDetail.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for post-detail
 */
export const postDetailActions = { ...postDetailSlice.actions, ...actions };

export default postDetailSlice.reducer;
