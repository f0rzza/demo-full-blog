import { getFeaturedPost, getLatestPosts } from '@/features/posts/api/postsApi';
import type { PostResponse } from '@shared/types';

// Type of the loader response.
export type HomePageLoaderType = {
  featuredPost: PostResponse | null;
  latestPosts: PostResponse[];
};

export const homePageLoader = async (): Promise<HomePageLoaderType> => {
  // Get all data for the homepage.
  const [featuredPost, latestPosts] = await Promise.all([getFeaturedPost(), getLatestPosts()]);
  // Alternative way : create a backend route '/home' which directly returns all the data.
  return { featuredPost, latestPosts };
};
