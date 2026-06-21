import express from 'express';
import { userIdSchema, createUserSchema, updateUserSchema } from '#shared/schemas/user.schemas.js';
import { checkAuthentication, checkAuthorization, validateRequest } from '../middlewares/index.js';
import userController from '../controllers/user.controller.js';
import { Role } from '@prisma/client';

const router = express.Router();

// Get a users list
router.get('/', checkAuthentication, checkAuthorization([Role.ADMIN]), userController.getAllUsers);

// Get a user
router.get(
  '/:id',
  checkAuthentication,
  validateRequest({ params: userIdSchema }),
  checkAuthorization([Role.ADMIN], { enabled: true }),
  userController.getUserById,
);

// Create a new user
router.post(
  '/',
  checkAuthentication,
  checkAuthorization([Role.ADMIN]),
  validateRequest({ body: createUserSchema }),
  userController.createUser,
);

// Update a user
router.put(
  '/:id',
  checkAuthentication,
  validateRequest({ params: userIdSchema }),
  checkAuthorization([Role.ADMIN], { enabled: true }),
  validateRequest({ body: updateUserSchema }),
  userController.updateUserById,
);

// Delete a user
router.delete(
  '/:id',
  checkAuthentication,
  validateRequest({ params: userIdSchema }),
  checkAuthorization([Role.ADMIN], { enabled: true }),
  userController.deleteUserById,
);

export default router;
