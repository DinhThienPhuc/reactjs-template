/* API INTERFACE: POST
   ========================================================================== */

import { IBaseResponse } from "../interfaces";

export interface IPostData {
  createdAt: string;
  name: string;
  id: string;
}

export interface IPostResponse extends IBaseResponse<IPostData> {
  data: IPostData;
}

export interface IPostListResponse extends IBaseResponse<IPostData[]> {
  data: IPostData[];
}
