import * as z from 'zod';
import { postBodySchema, postResponseSchema, postSchema } from '../schemas/post.schemas.js';
import { Statuses } from '../constants.js';

// Create types from Zod schemas.
export type Post = z.infer<typeof postSchema>;
export type PostResponse = z.infer<typeof postResponseSchema>;
export type PostPayload = z.infer<typeof postBodySchema>;

// Create types for React Hook Form.
export type PostBodyInput = z.input<typeof postBodySchema>; // authorId: string (form)
export type PostBodyOutput = z.output<typeof postBodySchema>; // authorId: number (API)

// Other types.
export type PostStatus = (typeof Statuses)[keyof typeof Statuses];

// Type of the options object in a 'Get Posts' query.
export type GetPostsOptions = {
  page?: number;
  categories?: number;
  sort?: string;
  search: string | null;
  status?: PostStatus;
  authors?: Array<number>;
  me?: boolean;
};
