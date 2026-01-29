import { prisma } from '../utils/prisma.js';

const omittedFields = { password: true };

// Get a list of users
async function getAll() {
  const users = await prisma.user.findMany({
    omit: omittedFields,
  });
  return users;
}

// Get a user by ID
async function getById(id) {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: omittedFields,
  });
  return user;
}

// Get a user by email
async function getByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
    omit: omittedFields,
  });
  return user;
}

// Get a user by username
async function getByUsername(username) {
  const user = await prisma.user.findUnique({
    where: { username },
    omit: omittedFields,
  });
  return user;
}

// Get existing users with email and username
async function getUserWithEmailOrUsername({ username, email }) {
  const user = await prisma.user.findMany({
    where: { OR: [{ username }, { email }] },
    omit: omittedFields,
  });
  return user;
}

// Create a new user
async function create({ username, email, password }) {
  const user = await prisma.user.create({
    data: { username, email, password },
    omit: omittedFields,
  });
  return user;
}

// Update a user by ID
async function updateById(id, { username, email, password }) {
  const user = await prisma.user.update({
    where: { id },
    data: { username, email, password },
    omit: omittedFields,
  });
  return user;
}

// Delete a user by ID
async function deleteById(id) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

export default {
  getAll,
  getById,
  getByEmail,
  getByUsername,
  getUserWithEmailOrUsername,
  create,
  updateById,
  deleteById,
};
