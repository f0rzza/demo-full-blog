import express from 'express';
import { userIdSchema, createUserSchema, updateUserSchema } from '#shared/schemas/user.schemas.js';
import { authorize, validateRequest } from '../middlewares/index.js';
import userController from '../controllers/user.controller.js';
import { Role } from '@prisma/client';

const router = express.Router();

// Get a users list
router.get('/', userController.getAllUsers);

// Get a user
router.get(
  '/:id',
  authorize(Role.ADMIN),
  validateRequest({ params: userIdSchema }),
  userController.getUserById,
);

// Create a new user
router.post(
  '/',
  authorize(Role.ADMIN),
  validateRequest({ body: createUserSchema }),
  userController.createUser,
);

// Update a user
router.put(
  '/:id',
  authorize(Role.ADMIN),
  validateRequest({ params: userIdSchema, body: updateUserSchema }),
  userController.updateUserById,
);

// Delete a user
router.delete(
  '/:id',
  authorize(Role.ADMIN),
  validateRequest({ params: userIdSchema }),
  userController.deleteUserById,
);

export default router;
