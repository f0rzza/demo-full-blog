import { getFeaturedPost, getLatestPosts } from '@/features/posts/api/postsApi';
import type { GetFeaturedPostApiResponse, GetPostsApiResponse } from '@/features/posts/posts.types';

// Type of the loader response.
export type HomePageLoaderType = {
  featuredPost: GetFeaturedPostApiResponse;
  latestPosts: GetPostsApiResponse;
};

export const homePageLoader = async (): Promise<HomePageLoaderType> => {
  // Get all data for the homepage.
  const [featuredPost, latestPosts] = await Promise.all([getFeaturedPost(), getLatestPosts()]);
  // Alternative way : create a backend route '/home' which directly returns all the data.
  return { featuredPost, latestPosts };
};
