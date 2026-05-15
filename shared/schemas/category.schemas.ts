import * as z from 'zod';
import { idSchema } from './common.schemas';

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
