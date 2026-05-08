import postRepository from '../repositories/post.repository.js';

async function findAllPosts({ categories, authors, currentPage, limit, featured, sort, search }) {
  const posts = await postRepository.getAll({
    categories,
    authors,
    currentPage,
    limit,
    featured,
    sort,
    search,
  });
  return posts;
}

async function findPostById(id) {
  const post = await postRepository.getById(id);
  return post;
}

async function createNewPost({ title, content, published, authorId, featured, categories }) {
  const post = await postRepository.create({
    title,
    content,
    published,
    authorId,
    featured,
    categories,
  });
  return post;
}

async function updatePostById(id, { title, content, published, authorId, featured, categories }) {
  // Before update the post, check its existence.
  const post = await findPostById(id);
  if (!post) return null;

  // Update the post.
  const updatedPost = await postRepository.updateById(id, {
    title,
    content,
    published,
    authorId,
    featured,
    categories,
  });
  return updatedPost;
}

async function deletePostById(id) {
  // Before delete the post, check its existence.
  const post = await findPostById(id);
  if (!post) return null;

  const deletedPost = await postRepository.deleteById(id);
  return deletedPost;
}

async function countPublishedPosts({ categories, authors, featured }) {
  return await postRepository.countPublishedPosts({ categories, authors, featured });
}

export default {
  findAllPosts,
  findPostById,
  createNewPost,
  updatePostById,
  deletePostById,
  countPublishedPosts,
};
