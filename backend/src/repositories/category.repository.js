import { prisma } from '../utils/prisma.js';

async function getAll() {
  const categories = await prisma.category.findMany();
  return categories;
}

async function getById(id) {
  const category = await prisma.category.findUnique({
    where: { id },
  });
  return category;
}

async function create({ name }) {
  const category = await prisma.category.create({
    data: { name },
  });
  return category;
}

async function updateById(id, { name }) {
  const category = await prisma.category.update({
    where: { id },
    data: { name },
  });
  return category;
}

async function deleteById(id) {
  const category = await prisma.category.delete({
    where: { id },
  });
  return category;
}

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
