import { useState, type ReactNode } from 'react';
import { checkApi, loginApi, logoutApi } from '@/features/auth/api/authApi';
import type { UserType } from '@/features/users/users.types';
import { AuthContext } from './AuthContext';
import type { AuthApiResponse } from '@/features/auth/auth.types';

// Define Auth provider using the previous context.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>();
  const isAuth = !!user; // Derived state.
  const [loading, setIsLoading] = useState(false);

  const login = async (identifier: string, password: string): Promise<AuthApiResponse> => {
    setIsLoading(true);

    try {
      const response = await loginApi(identifier, password);

      if (response.success) {
        setUser(response.user);
      }

      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred during authentication.';
      //TODO: specify a custom message for 401 Error
      return { success: false, message: message };
    } finally {
      setIsLoading(false);
    }
  };

  // TODO : try/catch
  const logout = async () => {
    setIsLoading(true);

    const response = await logoutApi();

    if (response.success) {
      setUser(undefined);
    }

    setIsLoading(false);
  };

  // Check if user is authenticated.
  // TODO : try/catch
  const checkAuthentication = async () => {
    setIsLoading(true);

    const response = await checkApi();

    if (response.success) {
      setUser(response.user);
    }

    setIsLoading(false);
  };

  return (
    <AuthContext value={{ user, isAuth, loading, login, logout, checkAuthentication }}>
      {children}
    </AuthContext>
  );
}
