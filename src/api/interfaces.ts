/* API BASE INTERFACES
   ========================================================================== */

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
export interface IBaseRequestBody {
  [key: string]: any;
}

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
