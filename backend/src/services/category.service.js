import HttpError from '../errors/HttpError.js';
import categoryRepository from '../repositories/category.repository.js';

async function findAllCategories() {
  const categories = await categoryRepository.getAll();
  return categories;
}

async function findCategoryById(id) {
  const category = await categoryRepository.getById(id);

  if (!category) {
    throw new HttpError(`Category not found with ID ${id}.`, 404);
  }

  return category;
}

async function createNewCategory({ name }) {
  const category = await categoryRepository.create({ name });

  if (!category) {
    throw new HttpError(`An error has occurred. No category were created.`, 500);
  }

  return category;
}

async function updateCategoryById(id, { name }) {
  // Before update the category, check its existence.
  const category = await findCategoryById(id);

  if (!category) {
    throw new HttpError(`Category not found with ID ${id}.`, 404);
  }

  // Update the category.
  const updatedCategory = await categoryRepository.updateById(id, { name });

  if (!updatedCategory) {
    throw new HttpError(`An error has occurred. No category were updated.`, 500);
  }

  return updatedCategory;
}

async function deleteCategoryById(id) {
  // Before delete the category, check its existence.
  const category = await findCategoryById(id);

  if (!category) {
    throw new HttpError(`Category not found with ID ${id}.`, 404);
  }

  const deletedCategory = await categoryRepository.deleteById(id);

  if (!deletedCategory) {
    throw new HttpError(`An error has occurred. No category were deleted.`, 500);
  }

  return deletedCategory;
}

export default {
  findAllCategories,
  findCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
