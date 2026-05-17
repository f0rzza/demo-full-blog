import express from 'express';
import postController from '../controllers/post.controller.js';
import { postIdSchema, createPostSchema, updatePostSchema } from '#shared/schemas/post.schemas.js';
import { validateRequest } from '../middlewares/validate.middleware.js';

const router = express.Router();
// TODO : use validateRequest middleware

// Get a posts list
router.get('/', postController.getAllPosts);

// Get a post
router.get('/:id', validateRequest({ params: postIdSchema }), postController.getPostById);

// Create a new post
router.post('/', validateRequest({ body: createPostSchema }), postController.createPost);

// Update a post
router.put(
  '/:id',
  validateRequest({ params: postIdSchema, body: updatePostSchema }),
  postController.updatePostById,
);

// Delete a post
router.delete('/:id', validateRequest({ params: postIdSchema }), postController.deletePostById);

export default router;
