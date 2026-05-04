import { callApi } from '@/shared/api/api';
import type { GetCategoriesApiResponse } from '../categories.types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getCategories(): Promise<GetCategoriesApiResponse> {
  // Generate API URL
  const url = new URL('/categories', baseApiUrl);

  // Call API
  const results = await callApi(url);
  return results;
}
