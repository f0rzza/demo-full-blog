// Generic API response type. The type of data depends on the context.
export type ApiResponse<T> = {
  data: T;
  message?: string;
};

// Generic API error type. (client side)
// TODO: errors ?
export type ApiError = {
  status: number;
  message: string;
};
