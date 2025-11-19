import express from 'express';

const router = express.Router();

// Get the users list
router.get('/', (req, res) => {
  res.json('Get users list');
});

// Get a user data
router.get("/:id", (req, res) => {
  res.json('View user');
});

// Create a new user
router.post("/", (req, res) => {
  res.json('Create new user');
});

// Update partially a user
router.patch("/:id", (req, res) => {
  res.json('Update partially user');
});

// Update a user
router.put("/:id", (req, res) => {
  res.json('Update user');
});

// Delete a user
router.delete("/:id", (req, res) => {
  res.json('Delete user');
});

export default router;
