import userService from '../services/user.service.js';
import { userSchema } from '../utils/zod.schemas.js';

async function getAllUsers(req, res) {
  const users = await userService.findAllCategories();
  res.json(users);
}

async function getUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Check only user ID. (all other validations are disabled)
  const result = userSchema.pick({ id: true }).safeParse({ id });

  if (!result.success) {
    return res.status(400).json({ error: `Invalid User ID.` }); // Error : Bad Request
  }

  // Retrieve user with a correct integer ID.
  const user = await userService.findUserById(id);

  if (!user) {
    return res.status(404).json({ error: `User not found with ID ${id}.` }); // Error : Not Found
  }

  res.json(user);
}

async function createUser(req, res) {
  try {
    // Check if received data are corrects. (except the ID)
    const result = userSchema.omit({ id: true }).safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map( (error) => error.message );
      return res.status(400).json({ error: errors }); // Error : Bad Request
    }

    // Create new user with correct data.
    const user = await userService.createNewUser(result.data);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No user were created.` });
  }
}

async function updateUserById(req, res) {
  try {
    // Convert received user ID to number.
    const id = Number(req.params.id);
    const { name, email } = req.body;

    // Check all received data.
    const result = userSchema.safeParse({ id, name, email });

    if (!result.success) {
      const errors = result.error.issues.map( (error) => error.message );
      return res.status(400).json({ error: errors }); // Error : Bad Request
    }

    // Update existing user.
    const updatedUser = await userService.updateUserById(id, {
      name,
      email,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: `User not found with ID ${id}. No user were updated.` }); // Error : Not Found
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No user were updated.` });
  }
}

async function deleteUserById(req, res) {
  try {
    // Convert received user ID to number.
    const id = Number(req.params.id);
    // Check only user ID. (all other validations are disabled)
    const result = userSchema.pick({ id: true }).safeParse({ id });

    if (!result.success) {
      return res.status(400).json({ error: `Invalid User ID.` }); // Error : Bad Request
    }

    // Delete existing user.
    const deletedUser = await userService.deleteUserById(id);

    if (!deletedUser) {
      return res.status(404).json({ error: `User not found with ID ${id}. No user were deleted.` }); // Error : Not Found
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No user were deleted.` });
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
}
