import * as z from 'zod';
import { idSchema } from './common.schemas.js';

const nameSchema = z
  .string({ error: 'Name is required.' })
  .trim()
  .min(3, { message: 'Name must contain at least 3 characters.' })
  .max(70, { message: 'Title must contain at most 70 characters.' });

// Category schema (representation in the database)
export const categorySchema = z.object({
  id: idSchema,
  name: nameSchema,
});

// Schema for the route where ID is used as path parameter.
export const categoryIdSchema = z.object({
  id: idSchema,
});

// Create new Post shema for the creation.
export const createCategorySchema = categorySchema.omit({ id: true });
export const updateCategorySchema = createCategorySchema;
