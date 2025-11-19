import express from 'express';

const router = express.Router();

// Get the posts list
router.get('/', (req, res) => {
  res.json('Get posts list');
});

// Get a post data
router.get("/:id", (req, res) => {
  res.json('View post');
});

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
