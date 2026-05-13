import { callApi } from '@/shared/utils/api';
import type { AuthApiResponse, LogoutApiResponse } from '../auth.types';

const baseApiUrl = `${import.meta.env.VITE_BASE_BLOG_API_URL}`;

export async function loginApi(identifier: string, password: string): Promise<AuthApiResponse> {
  const url = new URL('/auth/login', baseApiUrl);
  const response = await callApi(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
    credentials: 'include',
  });
  return response;
}

export async function logoutApi(): Promise<LogoutApiResponse> {
  const url = new URL('/auth/logout', baseApiUrl);
  const response = await callApi(url, {
    method: 'POST',
    credentials: 'include',
  });
  return response;
}

export async function checkApi(): Promise<AuthApiResponse> {
  const url = new URL('/auth/check', baseApiUrl);
  const response = await callApi(url, {
    credentials: 'include',
  });
  return response;
}
