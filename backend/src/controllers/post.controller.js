import postService from '../services/post.service.js';

async function getAllPosts(req, res) {
  const { categories = '', authors = '', page = 1, limit = 10 } = req.query;
  // Convert list of ids, from string to array.
  const parsedCategories = categories ? categories.split(',').map(Number) : [];
  const parsedAuthors = authors ? authors.split(',').map(Number) : [];

  // Get posts with current filters / page.
  const posts = await postService.findAllPosts({
    categories: parsedCategories,
    authors: parsedAuthors,
    currentPage: parseInt(page),
    limit: parseInt(limit),
  });

  // Get total published posts.
  const total = await postService.countPublishedPosts({
    categories: parsedCategories,
    authors: parsedAuthors,
  });

  res.json({ posts, total });
}

async function getPostById(req, res) {
  // Get post from current ID.
  const postId = parseInt(req.params.id);
  const post = await postService.findPostById(postId);

  if (!post) {
    return res.status(404).json({ error: `Post with id: ${postId} not found.` });
  }

  res.json(post);
}

async function createPost(req, res) {
  try {
    const { title, content, authorId } = req.body;
    const parsedAuthorId = parseInt(authorId);
    // TODO: use 'Zod' package or eq to get validated data.

    // Create new post.
    const post = await postService.createNewPost({ title, content, authorId: parsedAuthorId });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No post were created.` });
  }
}

async function updatePostById(req, res) {
  try {
    const postId = parseInt(req.params.id);
    const { title, content, published, authorId } = req.body;
    const isPublished = published === 'true';
    const parsedAuthorId = parseInt(authorId);
    // TODO: use 'Zod' package or eq to get validated data.

    // Update existing post.
    const updatedPost = await postService.updatePostById(postId, {
      title,
      content,
      published: isPublished,
      authorId: parsedAuthorId,
    });

    if (!updatedPost) {
      return res
        .status(404)
        .json({ error: `Post with id: ${postId} not found. No post were updated.` });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No post were updated.` });
  }
}

async function deletePostById(req, res) {
  try {
    // Delete existing post.
    const postId = parseInt(req.params.id);
    const deletedPost = await postService.deletePostById(postId);

    if (!deletedPost) {
      return res
        .status(404)
        .json({ error: `Post with id: ${postId} not found. No post were deleted.` });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No post were deleted.` });
  }
}

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
