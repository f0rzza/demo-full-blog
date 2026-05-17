import * as z from 'zod';
import { categorySchema } from '../schemas/category.schemas.js';

// Create types from Zod schemas.
export type Category = z.infer<typeof categorySchema>;
