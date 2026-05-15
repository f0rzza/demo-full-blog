import HttpError from '../errors/HttpError.js';
import postService from '../services/post.service.js';
import { parseBoolean, parseCategories, parseSearch, parseSort } from '../utils/tools.js';

// TODO : use validateRequest middleware to remove try/catch

async function getAllPosts(req, res) {
  const {
    categories = '',
    authors = '',
    page = 1,
    limit = 10,
    featured,
    sort = 'date-desc',
    search = '',
  } = req.query;

  // Convert list of ids, from string to array.
  const parsedCategories = categories ? categories.split(',').map(Number) : [];
  const parsedAuthors = authors ? authors.split(',').map(Number) : [];
  const parsedFeatured = parseBoolean(featured);
  const parsedSort = parseSort(sort);
  const parsedSearch = parseSearch(search);

  // Get posts with current filters / page.
  const posts = await postService.findAllPosts({
    categories: parsedCategories,
    authors: parsedAuthors,
    currentPage: parseInt(page),
    limit: parseInt(limit),
    featured: parsedFeatured,
    sort: parsedSort,
    search: parsedSearch,
  });

  // Get total published posts.
  const total = await postService.countPublishedPosts({
    categories: parsedCategories,
    authors: parsedAuthors,
    featured: parsedFeatured,
  });

  res.json({ data: posts, pagination: { currentPage: page, totalItems: total } });
  // TODO : include totalPages
}

async function getPostById(req, res) {
  // Get post from current ID.
  const postId = parseInt(req.params.id);
  const post = await postService.findPostById(postId);

  res.json({ data: post });
}

async function createPost(req, res, next) {
  try {
    const { title, content, published, authorId, featured, categories } = req.body;
    const isPublished = parseBoolean(published);
    const parsedAuthorId = parseInt(authorId);
    const parsedFeatured = parseBoolean(featured);
    const parsedCategories = parseCategories(categories);
    // TODO: use 'Zod' package or eq to get validated data.

    // Create new post.
    const post = await postService.createNewPost({
      title,
      content,
      published: isPublished,
      authorId: parsedAuthorId,
      featured: parsedFeatured,
      categories: parsedCategories,
    });

    res.status(201).json({ data: post, message: 'Post successfully created.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No post were created.`, 500));
  }
}

async function updatePostById(req, res, next) {
  try {
    const postId = parseInt(req.params.id);
    const { title, content, published, authorId, featured, categories } = req.body;
    const isPublished = parseBoolean(published);
    const parsedAuthorId = parseInt(authorId);
    const parsedFeatured = parseBoolean(featured);
    const parsedCategories = parseCategories(categories);
    // TODO: use 'Zod' package or eq to get validated data.

    // Update existing post.
    const updatedPost = await postService.updatePostById(postId, {
      title,
      content,
      published: isPublished,
      authorId: parsedAuthorId,
      featured: parsedFeatured,
      categories: parsedCategories,
    });

    res.json({ data: updatedPost, message: 'Post successfully updated.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No post were updated.`, 500));
  }
}

async function deletePostById(req, res, next) {
  try {
    // Delete existing post.
    const postId = parseInt(req.params.id);
    const deletedPost = await postService.deletePostById(postId);

    res.json({ data: null, message: 'Post successfully deleted.' });
  } catch (error) {
    next(new HttpError(`An error has occurred. No post were deleted.`, 500));
  }
}

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
