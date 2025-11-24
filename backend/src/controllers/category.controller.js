import categoryService from '../services/category.service.js';

async function getAllCategories(req, res) {
  const categories = await categoryService.findAllCategories();
  res.json(categories);
}

async function getCategoryById(req, res) {
  // Get category from current ID.
  const categoryId = parseInt(req.params.id);
  const category = await categoryService.findCategoryById(categoryId);

  if (!category) {
    return res.status(404).json({ error: `Category with id: ${categoryId} not found.` });
  }

  res.json(category);
}

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Create new category.
    const category = await categoryService.createNewCategory({ name });

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No category were created.` });
  }
}

async function updateCategoryById(req, res) {
  try {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Update existing category.
    const updatedCategory = await categoryService.updateCategoryById(categoryId, {
      name,
    });

    if (!updatedCategory) {
      return res.status(404).json({ error: `Category with id: ${categoryId} not found. No category were updated.` });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No category were updated.` });
  }
}

async function deleteCategoryById(req, res) {
  try {
    // Delete existing category.
    const categoryId = parseInt(req.params.id);
    const deletedCategory = await categoryService.deleteCategoryById(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: `Category with id: ${categoryId} not found. No category were deleted.` });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No category were deleted.` });
  }
}

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
}
