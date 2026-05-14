import { useEffect, useState, type ReactNode } from 'react';
import { checkApi, loginApi, logoutApi } from '@/features/auth/api/authApi';
import { AuthContext } from './AuthContext';
import type { ApiError, ApiResponse, User } from '@shared/types';

// Define Auth provider using the previous context.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuth = !!user; // Derived state.
  const [loading, setIsLoading] = useState(false);

  const login = async (identifier: string, password: string): Promise<ApiResponse<User>> => {
    setIsLoading(true);

    try {
      const response = await loginApi(identifier, password);
      setUser(response.data);
      return response;
    } catch (error) {
      throw error as ApiError;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<ApiResponse<null>> => {
    setIsLoading(true);

    try {
      const response = await logoutApi();
      setUser(null);
      return response;
    } catch (error) {
      throw error as ApiError;
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user is authenticated.
  const checkAuthentication = async (): Promise<ApiResponse<User>> => {
    setIsLoading(true);

    try {
      const response = await checkApi();

      if (response.data) {
        setUser(response.data);
      } else {
        setUser(null); // Session expired
      }

      return response;
    } catch (error) {
      setUser(null);
      throw error as ApiError;
    } finally {
      setIsLoading(false);
    }
  };

  // Check authentication when App starts.
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext value={{ user, isAuth, loading, login, logout, checkAuthentication }}>
      {children}
    </AuthContext>
  );
}
