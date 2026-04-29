import { callApi } from '@/shared/api/api';
import type { GetPostsApiResponse } from '../posts.types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getFeaturedPost(): Promise<GetPostsApiResponse | null> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);
  url.searchParams.set('limit', '1');
  url.searchParams.set('featured', 'true');

  // Call API
  const results = await callApi(url);

  if (results.total > 0) return results.posts[0];

  return null;
}

export async function getLatestPosts(nb: number = 5): Promise<GetPostsApiResponse | null> {
  // Generate API URL
  const url = new URL('/posts', baseApiUrl);
  url.searchParams.set('limit', nb.toString());

  // Call API
  const results = await callApi(url);

  if (results.total > 0) return results;

  return null;
}
