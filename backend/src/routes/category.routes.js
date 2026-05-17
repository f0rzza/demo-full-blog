import express from 'express';
import categoryController from '../controllers/category.controller.js';
import {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
} from '#shared/schemas/category.schemas.js';
import { validateRequest } from '../middlewares/validate.middleware.js';

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
  validateRequest({ body: createCategorySchema }),
  categoryController.createCategory,
);

// Update a category
router.put(
  '/:id',
  validateRequest({ params: categoryIdSchema, body: updateCategorySchema }),
  categoryController.updateCategoryById,
);

// Delete a category
router.delete(
  '/:id',
  validateRequest({ params: categoryIdSchema }),
  categoryController.deleteCategoryById,
);

export default router;
