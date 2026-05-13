// Generic API response type. The type of data depends on the context.
export type ApiResponse<T> = {
  data: T;
  message?: string;
  pagination?: Pagination;
};

// Generic API error type. (client side)
// TODO: errors ?
export type ApiError = {
  status: number;
  message: string;
};

type Pagination = {
  currentPage: number;
  totalItems: number;
};
