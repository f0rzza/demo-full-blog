import * as z from 'zod';
import { idSchema } from './common.schemas';

const titleSchema = z
  .string({ error: 'Title is required.' })
  .trim()
  .min(10, { message: 'Name must contain at least 10 characters.' })
  .max(200, { message: 'Title must contain at most 200 characters.' });

const contentSchema = z
  .string({ error: 'Content is required.' })
  .trim()
  .min(100, { message: 'Content must contain at least 100 characters.' });

const chapoSchema = z
  .string()
  .trim()
  .min(250, { message: 'Content must contain at least 250 characters.' })
  .optional();

const authorSchema = z.coerce.number().int().positive({ error: 'Select an author.' });

// Post schema
export const postSchema = z.object({
  id: idSchema,
  title: titleSchema,
  content: contentSchema,
  published: z.boolean().default(false),
  authorId: authorSchema,
  categories: z.array(z.string()), // TODO
  featured: z.boolean().default(false),
  chapo: chapoSchema,
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Route schema with ID as path parameter.
export const postIdSchema = z.object({
  id: idSchema,
});

// Post schema for creation.
export const createPostSchema = postSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({ published: true, categories: true, featured: true, chapo: true });

// Post schema for update
export const updatePostSchema = postSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial({ published: true, categories: true, featured: true, chapo: true });

// export type PostType = z.infer<typeof postSchema>; // TODO: remove duplicated PostType
export type CreatePostInput = z.input<typeof createPostSchema>; // authorId: string (form)
export type CreatePostOutput = z.output<typeof createPostSchema>; // authorId: number (API)
