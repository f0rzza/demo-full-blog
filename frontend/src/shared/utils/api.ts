import type { ApiError, ApiResponse } from '@shared/types';

// Generic function to make API request.
export async function callApi<T>(
  endpoint: URL,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    // Get server errors in the body. Retuns {} if there is error during json().
    const body = await response.json().catch(() => ({}));
    // Create and return ApiError.
    const error: ApiError = {
      status: response.status,
      message: body.message ?? 'Api Error',
    };
    throw error;
  }

  return response.json() as Promise<ApiResponse<T>>;
}
