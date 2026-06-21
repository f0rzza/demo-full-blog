import express from 'express';
import { userIdSchema, createUserSchema, updateUserSchema } from '#shared/schemas/user.schemas.js';
import { checkAuthentication, checkAuthorization, validateRequest } from '../middlewares/index.js';
import authorController from '../controllers/author.controller.js';
import { Role } from '@prisma/client';

const router = express.Router();

// Get a users list
router.get(
  '/',
  checkAuthentication,
  checkAuthorization([Role.ADMIN, Role.EDITOR]),
  authorController.getAuthors,
);

export default router;
