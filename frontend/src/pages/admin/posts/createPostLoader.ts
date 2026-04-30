import { getCategories } from '@/features/categories/api/categoriesApi';
import type { GetCategoriesApiResponse } from '@/features/categories/categories.types';

// Type of the loader response.
export type CreatePostPageLoaderType = {
  categories: GetCategoriesApiResponse;
};

export const createPostPageLoader = async (): Promise<CreatePostPageLoaderType> => {
  // Get all data for the homepage.
  const [categories] = await Promise.all([getCategories()]);
  // Alternative way : create a backend route which directly returns all the data.
  return { categories };
};
