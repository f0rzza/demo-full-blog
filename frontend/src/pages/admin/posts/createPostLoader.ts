import { getCategories } from '@/features/categories/api/categoriesApi';
import type { GetCategoriesApiResponse } from '@/features/categories/categories.types';
import { getAuthors } from '@/features/users/api/usersApi';
import type { GetUsersApiResponse } from '@/features/users/users.types';

// Type of the loader response.
export type CreatePostPageLoaderType = {
  categories: GetCategoriesApiResponse;
  authors: GetUsersApiResponse;
};

export const createPostPageLoader = async (): Promise<CreatePostPageLoaderType> => {
  // Get all data for the homepage.
  const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);
  // Alternative way : create a backend route which directly returns all the data.
  return { categories, authors };
};
