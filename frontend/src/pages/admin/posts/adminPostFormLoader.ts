import { getCategories } from '@/features/categories/api/categoriesApi';
import { getAuthors } from '@/features/users/api/usersApi';
import type { Category, User } from '@shared/types';
import type { LoaderFunctionArgs } from 'react-router-dom';

// Type of the loader response.
export type AdminPostFormPageLoaderType = {
  categories: Category[];
  authors: User[];
};

export const adminPostFormPageLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<AdminPostFormPageLoaderType> => {
  console.log('params', params); // TODO: get post from current ID for edit page
  // Get all data for the homepage.
  const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);
  // Alternative way : create a backend route which directly returns all the data.
  return { categories, authors };
};
