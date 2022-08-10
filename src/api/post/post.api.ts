/* POST API REQUESTS
   ========================================================================== */

import { IPostListResponse, IPostResponse } from "./post.interface";

import { AxiosResponse } from "axios";
import { requestWithoutJwt } from "../request";

export const getPosts = (): Promise<AxiosResponse<IPostListResponse>> => {
  return requestWithoutJwt.get<IPostListResponse>("/posts");
};

export const getPostById = (
  id: string
): Promise<AxiosResponse<IPostResponse>> => {
  return requestWithoutJwt.get<IPostResponse>(`/posts/${id}`);
};
