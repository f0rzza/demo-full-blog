import type { ApiResponse, CreateUserOutput, User } from '@shared/types';

export type AuthStateType = {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<ApiResponse<User>>;
  logout: () => Promise<ApiResponse<null>>;
  checkAuthentication: () => Promise<ApiResponse<User>>;
  register: (data: CreateUserOutput) => Promise<ApiResponse<User>>;
};
