/* POST API INTERFACES
   ========================================================================== */

import { IBaseResponse } from "api/interfaces";

export interface IPostData {
  createdAt: string;
  name: string;
  id: string;
}

export interface IPostResponse extends IBaseResponse {
  data: IPostData;
}

export interface IPostListResponse extends IBaseResponse {
  data: IPostData[];
}
