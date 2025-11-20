import postService from '../services/post.service.js';

async function getAllPosts(req, res) {
  const posts = await postService.findAllPosts();
  res.json( posts );
}

async function getPostById(req, res) {
  const postId = parseInt(req.params.id);
  const post = await postService.findPostById(postId);
  res.json( post );
}

export default {
  getAllPosts,
  getPostById,
}
