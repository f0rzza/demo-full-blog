import { prisma } from "../utils/prisma.js";

const omittedFields = { password: true };

async function getAll() {
  const users = await prisma.user.findMany({
    omit: omittedFields,
  });
  return users;
}

async function getById(id) {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: omittedFields,
  });
  return user;
}

async function create({ username, email, password }) {
  const user = await prisma.user.create({
    data: { username, email, password },
    omit: omittedFields,
  });
  return user;
}

async function updateById(id, { username, email, password }) {
  const user = await prisma.user.update({
    where: { id },
    data: { username, email, password },
    omit: omittedFields,
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
