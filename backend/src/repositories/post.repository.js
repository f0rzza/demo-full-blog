import { prisma } from '../utils/prisma.js';

async function getAll() {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return post;
}

export default {
  getAll,
  getById,
};
