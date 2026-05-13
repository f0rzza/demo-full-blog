import HttpError from '../errors/HttpError.js';
import categoryService from '../services/category.service.js';

// TODO : use validateRequest middleware to remove try/catch

async function getAllCategories(req, res) {
  const categories = await categoryService.findAllCategories();
  res.json({ data: categories });
}

async function getCategoryById(req, res) {
  // Get category from current ID.
  const categoryId = parseInt(req.params.id);
  const category = await categoryService.findCategoryById(categoryId);

  res.json({ data: category });
}

async function createCategory(req, res, next) {
  try {
    const { name } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Create new category.
    const category = await categoryService.createNewCategory({ name });

    res.status(201).json({ data: category, message: 'Category successfully created.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No category were created.`, 500));
  }
}

async function updateCategoryById(req, res, next) {
  try {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Update existing category.
    const updatedCategory = await categoryService.updateCategoryById(categoryId, {
      name,
    });

    res.json({ data: updatedCategory, message: 'Category successfully updated.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No category were updated.`, 500));
  }
}

async function deleteCategoryById(req, res, next) {
  try {
    // Delete existing category.
    const categoryId = parseInt(req.params.id);
    const deletedCategory = await categoryService.deleteCategoryById(categoryId);

    res.json({ data: null, message: 'Category successfully deleted.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No category were deleted.`, 500));
  }
}

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
