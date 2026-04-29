import { getFeaturedPost, getLatestPosts } from '@/features/posts/api/postsApi';

export const homePageLoader = async () => {
  // Get all data for the homepage.
  const [featuredPost, latestPosts] = await Promise.all([getFeaturedPost(), getLatestPosts()]);
  // Alternative way : create a backend route '/home' which directly returns all the data.
  return { featuredPost, latestPosts };
};
