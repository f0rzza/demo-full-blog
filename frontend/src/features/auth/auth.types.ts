import { type UserType } from '@/features/users/users.types';

export type AuthStateType = {
  user: UserType | undefined;
  isAuth: boolean;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuthentication: () => Promise<void>;
};

export type AuthApiResponse =
  | { success: true; user: UserType }
  | { success: false; message: string };

export type LogoutApiResponse = { success: boolean };
