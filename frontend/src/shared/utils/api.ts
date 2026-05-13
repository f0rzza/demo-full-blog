// Generic function to make API request.
export async function callApi(endpoint: URL, options: RequestInit = {}) {
  let response: Response;

  try {
    response = await fetch(endpoint, options);
  } catch {
    throw new Error('Network Error');
  }

  if (!response.ok) {
    throw new Error(response.statusText ?? 'Api Error');
    // TODO: create ApiError
  }

  return await response.json();
}
