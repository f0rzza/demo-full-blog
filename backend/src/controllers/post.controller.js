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

async function updatePostById(req, res) {
  const postId = parseInt(req.params.id);
  const { title, content, published, authorId } = req.body;
  const isPublished = (published === 'true');
  const parsedAuthorId = parseInt(authorId);
  // TODO: use 'Zod' package or eq to get validated data.

  const updatedPost = await postService.updatePostById(postId, {
    title,
    content,
    published: isPublished,
    authorId: parsedAuthorId,
  });

  if (!updatedPost) {
    return res.status(404).json({ error: `Post with id: ${postId} not found. No post were updated.` });
  }

  res.json( updatedPost );
}

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
}
