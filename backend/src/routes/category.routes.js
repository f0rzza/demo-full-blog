import express from 'express';

const router = express.Router();

// Get the categories list
router.get('/', (req, res) => {
  res.json('Get categories list');
});

// Get a category data
router.get("/:id", (req, res) => {
  res.json('View category');
});

// Create a new category
router.post("/", (req, res) => {
  res.json('Create new category');
});

// Update partially a category
router.patch("/:id", (req, res) => {
  res.json('Update partially category');
});

// Update a category
router.put("/:id", (req, res) => {
  res.json('Update category');
});

// Delete a category
router.delete("/:id", (req, res) => {
  res.json('Delete category');
});

export default router;
