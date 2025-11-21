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

async function create({title, content, authorId}) {
  const post = await prisma.post.create({
    data: {title, content, authorId},
  });
  return post;
}

async function updateById(id, { title, content, published, authorId }) {
  const post = await prisma.post.update({
    where: { id },
    data: { title, content, published, authorId },
  });
  return post;
}

export default {
  getAll,
  getById,
  create,
  updateById,
};
