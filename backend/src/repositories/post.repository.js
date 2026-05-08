import { prisma } from '../utils/prisma.js';
import { buildWhereClauses } from '../builders/posts-query.builder.js';

async function getAll({ categories, authors, currentPage, limit, featured, sort, search }) {
  const posts = await prisma.post.findMany({
    where: buildWhereClauses({
      categories,
      authors,
      featured,
      search,
    }),
    // Include related entities. For users, return only usernames.
    include: { categories: true, author: { select: { username: true } } },
    // Return X posts.
    ...(limit && { take: limit }),
    // Skip the first X posts according to the current page.
    ...(currentPage && { skip: (currentPage - 1) * limit }),
    // Apply the specified or default sort order.
    ...(!sort && { orderBy: [{ createdAt: 'desc' }] }),
    ...(sort && { orderBy: [{ [sort.criteria]: sort.order }] }),
  });
  return posts;
}

async function getById(id) {
  const post = await prisma.post.findUnique({
    where: { id },
    // Include related entities. For users, return only usernames.
    include: { categories: true, author: { select: { username: true } } },
  });
  return post;
}

async function create({ title, content, published, authorId, featured, categories }) {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
      // Use default value if 'featured' is undefined.
      ...(featured !== undefined && { featured }),
      ...(published !== undefined && { published }),
      // Add categories if necessary.
      ...(categories && {
        categories: {
          connect: categories,
        },
      }),
    },
  });
  return post;
}

async function updateById(id, { title, content, published, authorId, featured, categories }) {
  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      authorId,
      // Keep existing value if 'featured' is undefined.
      ...(featured !== undefined && { featured }),
      ...(published !== undefined && { published }),
      // Add categories if necessary.
      ...(categories && {
        categories: {
          set: categories, // Use 'set' to disconnect useless categories.
        },
      }),
    },
  });
  return post;
}

async function deleteById(id) {
  const post = await prisma.post.delete({
    where: { id },
  });
  return post;
}

async function countPublishedPosts({ categories, authors, featured }) {
  const posts = await prisma.post.count({
    where: buildWhereClauses({
      categories,
      authors,
      featured,
    }),
  });
  return posts;
}
// Note : add selected filters

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  countPublishedPosts,
};
