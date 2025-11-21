import express from 'express';
import postController from '../controllers/post.controller.js';

const router = express.Router();

// Get a posts list
router.get('/', postController.getAllPosts);

// Get a post
router.get("/:id", postController.getPostById);

// Create a new post
router.post("/", postController.createPost);

// Update a post
router.put("/:id", postController.updatePostById);

// Delete a post
router.delete("/:id", (req, res) => {
  res.json('Delete post');
});

export default router;
