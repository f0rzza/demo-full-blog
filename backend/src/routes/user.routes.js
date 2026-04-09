import express from "express";
import { userIdSchema, createUserSchema, updateUserSchema } from "../utils/zod.schemas.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

// Get a users list
router.get("/", userController.getAllUsers);

// Get a user
router.get("/:id", validateRequest({ params: userIdSchema }), userController.getUserById);

// Create a new user
router.post("/", validateRequest({ body: createUserSchema }), userController.createUser);

// Update a user
router.put(
  "/:id",
  validateRequest({ params: userIdSchema, body: updateUserSchema }),
  userController.updateUserById,
);

// Delete a user
router.delete("/:id", validateRequest({ params: userIdSchema }), userController.deleteUserById);

export default router;
