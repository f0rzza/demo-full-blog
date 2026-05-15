import { callApi } from '@/shared/utils/api';
import type { Category } from '@shared/types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getCategories(): Promise<Category[]> {
  // Generate API URL
  const url = new URL('/categories', baseApiUrl);

  // Call API
  const response = await callApi<Category[]>(url);
  return response.data;
}
