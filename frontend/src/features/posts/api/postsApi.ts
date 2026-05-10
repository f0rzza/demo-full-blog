import { callApi } from '@/shared/api/api';
import type {
  CreatePostApiResponse,
  CreatePostType,
  GetFeaturedPostApiResponse,
  GetPostsApiResponse,
  GetPostsOptions,
  PostType,
} from '../posts.types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getFeaturedPost(): Promise<GetFeaturedPostApiResponse> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);
  url.searchParams.set('limit', '1');
  url.searchParams.set('featured', 'true');

  // Call API
  const results = await callApi(url);

  if (results.total > 0) return results.posts[0];

  return null;
}

export async function getLatestPosts(nb: number = 5): Promise<GetPostsApiResponse> {
  // Get X posts from page 1.
  return getPosts(nb);
}

export async function getPosts(
  nb: number = 5,
  options?: GetPostsOptions,
): Promise<GetPostsApiResponse> {
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
  const results = await callApi(url);

  return results;
}

export async function getPost(id: number): Promise<PostType> {
  // Generate API URL
  const url = new URL(`/posts/${id}`, baseApiUrl);

  // Call API
  const result = await callApi(url);
  return result;
}

export async function createPost(data: CreatePostType): Promise<CreatePostApiResponse> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);

  // Call API
  const result = await callApi(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('res', result);

  return result;
}
