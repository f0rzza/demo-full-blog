import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

// Get a users list
router.get('/', userController.getAllUsers);

// Get a user
router.get("/:id", userController.getUserById);

// Create a new user
router.post("/", userController.createUser);

// Update a user
router.put("/:id", userController.updateUserById);

// Delete a user
router.delete("/:id", userController.deleteUserById);

export default router;
