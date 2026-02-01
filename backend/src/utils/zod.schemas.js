import * as z from 'zod';

const idSchema = z.coerce.number().int().positive();

// Returns email in lowercase after removing spaces and validating the format.
// Note: Because z.string().email() is deprecated, we use pipe() to check format after trim the email.
const emailSchema = z.string().trim().pipe(z.email('Invalid email address.').toLowerCase());

const usernameSchema = z
  .string()
  .trim()
  .min(3, { message: 'Name must contain at least 3 characters.' })
  .max(30, { message: 'Name must contain at most 30 characters.' })
  .regex(/^[a-zA-Z-]+$/, {
    message: 'Name can only contain letters and hyphens.',
  });

const passwordSchema = z
  .string({ message: 'Password is required.' })
  .min(8, {
    message: 'Password must contain at least 8 characters.',
  })
  .max(12, {
    message: 'Password must contain at most 12 characters.',
  });

// User schema
export const userSchema = z.object({
  id: idSchema,
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema,
});

// Schema for the route where user ID is used as path parameter.
export const userIdSchema = z.object({
  id: idSchema,
});

// Exclude ID verification during user creation
export const createUserSchema = userSchema.omit({ id: true });

// Make password field optional during update.
export const updateUserSchema = createUserSchema.partial({ password: true });

// Use Zod union for the 'identifier' field : only one input, could be username or email.
const identifierSchema = z
  .string({ message: 'Username or email is required.' })
  .min(1, { message: 'Username or email is required.' })
  .pipe(z.union([usernameSchema, emailSchema]));

export const loginSchema = z.object({
  identifier: identifierSchema,
  password: passwordSchema,
});
