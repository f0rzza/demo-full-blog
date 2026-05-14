import * as z from 'zod';
import { createPostSchema, postResponseSchema, postSchema } from '@shared/schemas';

// Create types from Zod schemas.
export type Post = z.infer<typeof postSchema>;
export type PostResponse = z.infer<typeof postResponseSchema>;
export type CreatePostPayload = z.infer<typeof createPostSchema>;

// Create types for React Hook Form.
export type CreatePostInput = z.input<typeof createPostSchema>; // authorId: string (form)
export type CreatePostOutput = z.output<typeof createPostSchema>; // authorId: number (API)

// Type of the options object in a 'Get Posts' query.
export type GetPostsOptions = {
  page?: number;
  categories?: number;
  sort?: string;
  search: string | null;
};
