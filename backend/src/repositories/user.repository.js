import { prisma } from '../utils/prisma.js';

async function getAll() {
  const categories = await prisma.user.findMany();
  return categories;
}

async function getById(id) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

async function create({ name, email }) {
  const user = await prisma.user.create({
    data: { name, email },
  });
  return user;
}

async function updateById(id, { name, email }) {
  const user = await prisma.user.update({
    where: { id },
    data: { name, email },
  });
  return user;
}

async function deleteById(id) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
