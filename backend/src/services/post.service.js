import postRepository from '../repositories/post.repository.js';

async function findAllPosts() {
  const posts = await postRepository.getAll();
  return posts;
}

async function findPostById(id) {
  const post = await postRepository.getById(id);
  return post;
}

export default {
  findAllPosts,
  findPostById,
};
