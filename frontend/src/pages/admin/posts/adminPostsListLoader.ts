import { getPosts } from '@/features/posts/api/postsApi';
import { POSTS_PER_PAGE } from '@/shared/constants';
import type { Filters } from '@/shared/types/common';
import { getFilterValues } from '@/shared/utils/filters';
import { Statuses } from '@shared/constants';
import type { PostResponse } from '@shared/types';
import type { LoaderFunctionArgs } from 'react-router-dom';

export type AdminPostsListPageLoaderType = {
  posts: PostResponse[];
  currentPage: number;
  totalPages: number;
  currentFilters: Filters;
};

export const adminPostsListPageLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<AdminPostsListPageLoaderType> => {
  // Get current page from url parameters.
  const url = new URL(request.url);
  const currentPage = parseInt(url.searchParams.get('page') || '1');

  // Filter & sort
  const search = url.searchParams.get('search');

  // Get all data for the page.
  const posts = await getPosts(POSTS_PER_PAGE, {
    page: currentPage,
    search,
    status: Statuses.ALL,
  });
  // Alternative way : create a backend route which directly returns all the data.

  // Get current filters form URL.
  const currentFilters = getFilterValues<Filters>(url, ['search']);

  const totalItems = posts.pagination?.totalItems;
  const totalPages = totalItems ? Math.ceil(totalItems / POSTS_PER_PAGE) : 1;
  return { posts: posts.data, currentPage, totalPages, currentFilters };
};
