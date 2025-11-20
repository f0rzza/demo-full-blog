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

async function createPost(req, res) {
  const {title, content, authorId} = req.body;
  const parsedAuthorId = parseInt(authorId);
  // TODO: use 'Zod' package or eq to get validated data.
  const post = await postService.createNewPost({title, content, authorId: parsedAuthorId});
  res.json( post );
}

export default {
  getAllPosts,
  getPostById,
  createPost,
}
