import express from 'express';
import categoryController from '../controllers/category.controller.js';
import {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
} from '#shared/schemas/category.schemas.js';
import { checkAuthentication, checkAuthorization, validateRequest } from '../middlewares/index.js';
import { Role } from '@prisma/client';

const router = express.Router();
// TODO : use validateRequest middleware

// Get a categories list
router.get('/', categoryController.getAllCategories);

// Get a category
router.get(
  '/:id',
  validateRequest({ params: categoryIdSchema }),
  categoryController.getCategoryById,
);

// Create a new category
router.post(
  '/',
  checkAuthentication,
  checkAuthorization([Role.ADMIN, Role.EDITOR]),
  validateRequest({ body: createCategorySchema }),
  categoryController.createCategory,
);

// Update a category
router.put(
  '/:id',
  checkAuthentication,
  checkAuthorization([Role.ADMIN, Role.EDITOR]),
  validateRequest({ params: categoryIdSchema, body: updateCategorySchema }),
  categoryController.updateCategoryById,
);

// Delete a category
router.delete(
  '/:id',
  checkAuthentication,
  checkAuthorization([Role.ADMIN]),
  validateRequest({ params: categoryIdSchema }),
  categoryController.deleteCategoryById,
);

export default router;
