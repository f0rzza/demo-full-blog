import { getCategories } from '@/features/categories/api/categoriesApi';
import type { GetCategoriesApiResponse } from '@/features/categories/categories.types';
import { getPosts } from '@/features/posts/api/postsApi';
import type { GetPostsApiResponse } from '@/features/posts/posts.types';
import { POSTS_PER_PAGE } from '@/shared/constants';
import type { Filters } from '@/shared/types/common';
import { getFilterValues } from '@/shared/utils/filters';
import type { LoaderFunctionArgs } from 'react-router-dom';

export type PostsListPageLoaderType = {
  categories: GetCategoriesApiResponse;
  posts: GetPostsApiResponse;
  currentPage: number;
  totalPages: number;
  currentFilters: Filters;
};

export const postsListPageLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<PostsListPageLoaderType> => {
  // Get current page from url parameters.
  const url = new URL(request.url);
  const currentPage = parseInt(url.searchParams.get('page') || '1');

  // Filter & sort
  const selectedCategory = parseInt(url.searchParams.get('category') || '0');
  const selectedSort = url.searchParams.get('sort') || 'date-desc';
  const search = url.searchParams.get('search');

  // Get all data for the page.
  const [categories, posts] = await Promise.all([
    getCategories(),
    getPosts(POSTS_PER_PAGE, {
      page: currentPage,
      categories: selectedCategory,
      sort: selectedSort,
      search,
    }),
  ]);
  // Alternative way : create a backend route which directly returns all the data.

  // Get current filters form URL.
  const currentFilters = getFilterValues<Filters>(url, ['category', 'search', 'sort']);

  const totalPages = Math.ceil(posts.total / POSTS_PER_PAGE);
  return { categories, posts, currentPage, totalPages, currentFilters };
};
