import { checkApi } from '@/features/auth/api/authApi';
import type { ApiError, Role } from '@shared/types';
import { type LoaderFunction, redirect } from 'react-router-dom';

// Middleware-like to check authentication.
// TODO: React Query
export const authLoader =
  (...roles: Role[]): LoaderFunction =>
  async () => {
    try {
      const user = await checkApi();
      // Check user role if necessary
      if (roles.length > 0 && !roles.includes(user.data.role)) {
        throw new Response('Forbidden', { status: 403 });
      }
      return user;
    } catch (error) {
      const apiError = error as ApiError;
      if (apiError.status === 401) throw redirect('/auth');
      throw error;
    }
  };
