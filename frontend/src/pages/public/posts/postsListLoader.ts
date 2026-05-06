import { getCategories } from '@/features/categories/api/categoriesApi';
import type { GetCategoriesApiResponse } from '@/features/categories/categories.types';
import { getLatestPosts } from '@/features/posts/api/postsApi';
import type { GetPostsApiResponse } from '@/features/posts/posts.types';
import { POSTS_PER_PAGE } from '@/shared/constants';
import type { LoaderFunctionArgs } from 'react-router-dom';

export type PostsListPageLoaderType = {
  categories: GetCategoriesApiResponse;
  posts: GetPostsApiResponse;
  currentPage: number;
  totalPages: number;
};

export const postsListPageLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<PostsListPageLoaderType> => {
  // Get current page from url parameters.
  const url = new URL(request.url);
  const currentPage = parseInt(url.searchParams.get('page') || '1');

  // Get all data for the page.
  const [categories, posts] = await Promise.all([getCategories(), getLatestPosts(POSTS_PER_PAGE)]);
  // Alternative way : create a backend route which directly returns all the data.

  const totalPages = Math.ceil(posts.total / POSTS_PER_PAGE);
  return { categories, posts, currentPage, totalPages };
};
