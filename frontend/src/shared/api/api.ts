// Generic function to make API request.
export async function callApi(endpoint: URL, options = {}) {
  const response = await fetch(`${endpoint}`, options);

  if (!response.ok) {
    throw new Response('Api Error', { status: 500 });
  }

  return await response.json();
}
