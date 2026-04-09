import categoryRepository from '../repositories/category.repository.js';

async function findAllCategories() {
  const categories = await categoryRepository.getAll();
  return categories;
}

async function findCategoryById(id) {
  const category = await categoryRepository.getById(id);
  return category;
}

async function createNewCategory({ name }) {
  const category = await categoryRepository.create({ name });
  return category;
}

async function updateCategoryById(id, { name }) {
  // Before update the category, check its existence.
  const category = await findCategoryById(id);
  if (!category) return null;

  // Update the category.
  const updatedCategory = await categoryRepository.updateById(id, { name });
  return updatedCategory;
}

async function deleteCategoryById(id) {
  // Before delete the category, check its existence.
  const category = await findCategoryById(id);
  if (!category) return null;

  const deletedCategory = await categoryRepository.deleteById(id);
  return deletedCategory;
}

export default {
  findAllCategories,
  findCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
