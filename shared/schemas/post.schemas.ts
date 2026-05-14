import * as z from 'zod';
import { idSchema } from './common.schemas';
import { categorySchema } from './category.schemas';
import { userSchema } from './user.schemas';

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

/** GENERAL **/

// Post schema (representation in the database)
export const postSchema = z.object({
  id: idSchema,
  title: titleSchema,
  content: contentSchema,
  published: z.boolean().default(false),
  authorId: authorSchema,
  featured: z.boolean().default(false),
  chapo: chapoSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

/** GET Requests  **/

// Override Post shema for the API Response.
// Note: categories and author are returned with Prisma.
export const postResponseSchema = postSchema.extend({
  categories: z.array(categorySchema),
  author: z.object(userSchema),
});

/** POST Requests  **/

// Create new Post shema for the creation.
export const createPostSchema = z.object({
  title: titleSchema,
  content: contentSchema,
  published: z.boolean().default(false),
  authorId: authorSchema,
  featured: z.boolean().default(false),
  chapo: chapoSchema,
  categories: z.array(idSchema),
});

/** PUT Requests  **/
// TODO

/** DELETE Requests  **/
// TODO
