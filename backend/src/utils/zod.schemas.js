import * as z from 'zod';

const idSchema = z.number().int().positive();

// Returns email in lowercase after removing spaces and validating the format.
// Note: Because z.string().email() is deprecated, we use pipe() to check format after trim the email.
const emailSchema = z.string().trim().pipe(
  z.email('Invalid email address.').toLowerCase(),
);
// TODO: check if email already exists.

// User schema
export const userSchema = z.object({
  id: idSchema,
  email: emailSchema,
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name must contain at least 3 characters.' })
    .max(30, { message: 'Name must contain at most 30 characters.' })
    .regex(/^[a-zA-Z-]+$/, { message: 'Name can only contain letters and hyphens.' }),
});
