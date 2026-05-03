import type { CategoryType } from '../categories/categories.types';
import type { UserType } from '../users/users.types';

export type PostType = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author: UserType;
  categories: Array<CategoryType>;
  featured: boolean;
  chapo: string;
};

export type GetPostsApiResponse = {
  posts: Array<PostType>;
  total: number;
} | null;

export type GetFeaturedPostApiResponse = PostType | null;

export type CreatePostType = {
  title: string;
  content: string;
  published?: boolean;
  authorId?: number;
  categories: Array<CategoryType>;
  featured: boolean;
  chapo: string;
};
