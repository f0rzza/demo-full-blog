import { callApi } from '@/shared/utils/api';
import type { GetUsersApiResponse } from '../users.types';

const baseApiUrl = import.meta.env.VITE_BASE_BLOG_API_URL;

export async function getAuthors(): Promise<GetUsersApiResponse> {
  // Generate API URL
  const url = new URL('/users', baseApiUrl);
  // TODO: get only users with specific roles (author, admin) when the data is created in the database.

  // Call API
  const results = await callApi(url);
  return results;
}
