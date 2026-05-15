import * as z from 'zod';
import { categorySchema } from '@shared/schemas';

// Create types from Zod schemas.
export type Category = z.infer<typeof categorySchema>;
