import { createContext } from 'react';
import { type AuthStateType } from '@/features/auth/auth.types';

// Initialize Auth context.
export const AuthContext = createContext<AuthStateType>({
  user: undefined,
  isAuth: false,
  loading: false,
  login: async () => ({ success: false, message: '' }),
  logout: async () => ({ success: false, message: '' }),
  checkAuthentication: async () => ({ success: false, message: '' }),
});
