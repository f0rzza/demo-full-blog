import { createContext } from 'react';
import { type AuthStateType } from '@/features/auth/auth.types';
import type { ApiResponse, User } from '@shared/types';

// Initialize Auth context.
export const AuthContext = createContext<AuthStateType>({
  user: null,
  isAuth: false,
  loading: false,
  login: async () => ({}) as ApiResponse<User>,
  logout: async () => ({}) as ApiResponse<null>,
  checkAuthentication: async () => ({}) as ApiResponse<User>,
});
