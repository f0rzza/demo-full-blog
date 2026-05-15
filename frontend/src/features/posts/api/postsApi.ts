import { callApi } from '@/shared/utils/api';
import type { ApiResponse, CreatePostPayload, GetPostsOptions, PostResponse } from '@shared/types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getFeaturedPost(): Promise<PostResponse | null> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);
  url.searchParams.set('limit', '1');
  url.searchParams.set('featured', 'true');

  const response = await callApi<PostResponse[]>(url);
  const { data } = response;

  // Return the first featured post or nothing.
  return data.length > 0 ? data[0] : null;
}

export async function getLatestPosts(nb: number = 5): Promise<PostResponse[]> {
  // Get X posts from page 1.
  const posts = await getPosts(nb);
  return posts.data;
}

export async function getPosts(
  nb: number = 5,
  options?: GetPostsOptions,
): Promise<ApiResponse<PostResponse[]>> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);
  url.searchParams.set('limit', nb.toString());

  // Add options to API URL if necessary.
  if (options) {
    // Get keys from options (categories, sort)
    Object.keys(options).forEach((value) => {
      const optionKey = value as keyof GetPostsOptions;
      if (options[optionKey]) url.searchParams.set(optionKey, options[optionKey].toString());
    });
  }

  // Call API
  const response = await callApi<PostResponse[]>(url);
  return response;
}

export async function getPost(id: number): Promise<PostResponse> {
  // Generate API URL
  const url = new URL(`/posts/${id}`, baseApiUrl);

  // Call API
  const result = await callApi<PostResponse>(url);
  return result.data;
}

// export async function createPost(data: CreatePostType): Promise<CreatePostApiResponse> {
export async function createPost(data: CreatePostPayload): Promise<PostResponse> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);

  // Call API
  const result = await callApi<PostResponse>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return result.data;
}
