import HttpError from '../errors/HttpError.js';
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

  if (!post) {
    throw new HttpError(`Post not found with ID ${id}.`, 404);
  }

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

  if (!post) {
    throw new HttpError(`An error has occurred. No post were created.`, 500);
  }

  return post;
}

async function updatePostById(id, { title, content, published, authorId, featured, categories }) {
  // Before update the post, check its existence.
  const post = await findPostById(id);

  if (!post) {
    throw new HttpError(`Post not found with ID ${id}.`, 404);
  }

  // Update the post.
  const updatedPost = await postRepository.updateById(id, {
    title,
    content,
    published,
    authorId,
    featured,
    categories,
  });

  if (!updatedPost) {
    throw new HttpError(`An error has occurred. No post were updated.`, 404);
  }

  return updatedPost;
}

async function deletePostById(id) {
  // Before delete the post, check its existence.
  const post = await findPostById(id);

  if (!post) {
    throw new HttpError(`Post not found with ID ${id}.`, 404);
  }

  const deletedPost = await postRepository.deleteById(id);

  if (!deletedPost) {
    throw new HttpError(`An error has occurred. No post were deleted.`, 404);
  }

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
