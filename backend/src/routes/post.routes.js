import express from 'express';
import postController from '../controllers/post.controller.js';

const router = express.Router();

// Get a posts list
router.get('/', postController.getAllPosts);

// Get a post
router.get("/:id", postController.getPostById);

// Create a new post
router.post("/", (req, res) => {
  res.json('Create new post');
});

// Update partially a post
router.patch("/:id", (req, res) => {
  res.json('Update partially post');
});

// Update a post
router.put("/:id", (req, res) => {
  res.json('Update post');
});

// Delete a post
router.delete("/:id", (req, res) => {
  res.json('Delete post');
});

export default router;
