import { getFeaturedPost } from '@/features/posts/api/postsApi';

export const homePageLoader = async () => {
  return await getFeaturedPost();
};
