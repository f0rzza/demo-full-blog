import postRepository from '../repositories/post.repository.js';

async function findAllPosts({ categories, authors, currentPage, limit }) {
  const posts = await postRepository.getAll({
    categories,
    authors,
    currentPage,
    limit,
  });
  return posts;
}

async function findPostById(id) {
  const post = await postRepository.getById(id);
  return post;
}

async function createNewPost({ title, content, authorId }) {
  const post = await postRepository.create({ title, content, authorId });
  // TODO : assign categories to post
  return post;
}

async function updatePostById(id, { title, content, published, authorId }) {
  // Before update the post, check its existence.
  const post = await findPostById(id);
  if (!post) return null;

  // Update the post.
  const updatedPost = await postRepository.updateById(id, { title, content, published, authorId });
  return updatedPost;
}

async function deletePostById(id) {
  // Before delete the post, check its existence.
  const post = await findPostById(id);
  if (!post) return null;

  const deletedPost = await postRepository.deleteById(id);
  return deletedPost;
}

async function countPublishedPosts({ categories, authors }) {
  return await postRepository.countPublishedPosts({ categories, authors });
}

export default {
  findAllPosts,
  findPostById,
  createNewPost,
  updatePostById,
  deletePostById,
  countPublishedPosts,
};
