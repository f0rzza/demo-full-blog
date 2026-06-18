import * as z from 'zod';
import { createUserSchema, loginSchema, userSchema } from '../schemas/user.schemas.js';
import { Role } from '../constants.js';

// Create types from Zod schemas.
export type User = z.infer<typeof userSchema>;
// export type Role = z.infer<typeof roleEnum>;

// Create types from constants.
export type Role = (typeof Role)[keyof typeof Role];

// Create types for React Hook Form.
export type LoginInput = z.input<typeof loginSchema>;
export type LoginOutput = z.output<typeof loginSchema>;
export type CreateUserInput = z.input<typeof createUserSchema>;
export type CreateUserOutput = z.output<typeof createUserSchema>;
