import { getCategories } from '@/features/categories/api/categoriesApi';
import type { GetCategoriesApiResponse } from '@/features/categories/categories.types';
import { getLatestPosts } from '@/features/posts/api/postsApi';
import type { GetPostsApiResponse } from '@/features/posts/posts.types';
import { POSTS_PER_PAGE } from '@/shared/constants';

export type PostsListPageLoaderType = {
  categories: GetCategoriesApiResponse;
  posts: GetPostsApiResponse;
};

export const postsListPageLoader = async (): Promise<PostsListPageLoaderType> => {
  // Get all data for the homepage.
  const [categories, posts] = await Promise.all([getCategories(), getLatestPosts(POSTS_PER_PAGE)]);
  // Alternative way : create a backend route which directly returns all the data.
  return { categories, posts };
};
