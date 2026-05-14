import * as z from 'zod';
import { loginSchema, userSchema } from '@shared/schemas';

// Create types from Zod schemas.
export type User = z.infer<typeof userSchema>;

// Create types for React Hook Form.
export type LoginInput = z.input<typeof loginSchema>;
export type LoginOutput = z.output<typeof loginSchema>;
