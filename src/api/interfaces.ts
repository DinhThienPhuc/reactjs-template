/* API BASE INTERFACES
   ========================================================================== */

import { IObject } from "utils/definations";

/**
 * Base request queries
 */
export interface IBaseRequestQueries {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Base request body
 */
export type IBaseRequestBody = IObject<any>

/**
 * Base response
 */
export interface IBaseResponse<T> {
  data: T;
}

/**
 * Base error response
 */
export interface IBaseErrorResponse {
  code: string;
  status: number;
  message: string;
}
