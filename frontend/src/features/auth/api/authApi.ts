import { callApi } from '@/shared/utils/api';
import type { ApiResponse, User } from '@shared/types';

const baseApiUrl = `${import.meta.env.VITE_BASE_BLOG_API_URL}`;

export async function loginApi(identifier: string, password: string): Promise<ApiResponse<User>> {
  const url = new URL('/auth/login', baseApiUrl);
  const response = await callApi<User>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
    credentials: 'include',
  });
  return response;
}

export async function logoutApi(): Promise<ApiResponse<null>> {
  const url = new URL('/auth/logout', baseApiUrl);
  const response = await callApi<null>(url, {
    method: 'POST',
    credentials: 'include',
  });
  return response;
}

export async function checkApi(): Promise<ApiResponse<User>> {
  const url = new URL('/auth/check', baseApiUrl);
  const response = await callApi<User>(url, {
    credentials: 'include',
  });
  return response;
}
