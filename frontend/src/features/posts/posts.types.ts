export type PostType = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  // TODO categories
  featured: boolean;
  chapo: string;
};

export type GetPostsApiResponse = {
  posts: Array<PostType>;
  total: number;
};
