import type { ApiError, ApiResponse } from '@shared/types';

// Generic function to make API request.
export async function callApi<T>(
  endpoint: URL,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    const error: ApiError = {
      status: response.status,
      message: response.statusText ?? 'Api Error',
    };
    throw error;
  }

  return response.json() as Promise<ApiResponse<T>>;
}
