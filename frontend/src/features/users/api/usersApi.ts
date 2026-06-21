import { callApi } from '@/shared/utils/api';
import type { User } from '@shared/types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getAuthors(): Promise<User[]> {
  // Generate API URL
  const url = new URL('/authors', baseApiUrl);

  // Call API
  const response = await callApi<User[]>(url, {
    credentials: 'include',
  });
  return response.data;
}
