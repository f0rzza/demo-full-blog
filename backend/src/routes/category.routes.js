import express from 'express';
import categoryController from '../controllers/category.controller.js';

const router = express.Router();

// Get a categories list
router.get('/', categoryController.getAllCategories);

// Get a category
router.get("/:id", categoryController.getCategoryById);

// Create a new category
router.post("/", categoryController.createCategory);

// Update a category
router.put("/:id", categoryController.updateCategoryById);

// Delete a category
router.delete("/:id", categoryController.deleteCategoryById);

export default router;
