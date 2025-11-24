import userService from '../services/user.service.js';

async function getAllUsers(req, res) {
  const users = await userService.findAllCategories();
  res.json(users);
}

async function getUserById(req, res) {
  // Get user from current ID.
  const userId = parseInt(req.params.id);
  const user = await userService.findUserById(userId);

  if (!user) {
    return res.status(404).json({ error: `User with id: ${userId} not found.` });
  }

  res.json(user);
}

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Create new user.
    const user = await userService.createNewUser({ name, email });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No user were created.` });
  }
}

async function updateUserById(req, res) {
  try {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    // TODO: use 'Zod' package or eq to get validated data.

    // Update existing user.
    const updatedUser = await userService.updateUserById(userId, {
      name,
      email,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: `User with id: ${userId} not found. No user were updated.` });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: `An error has occurred. No user were updated.` });
  }
}

async function deleteUserById(req, res) {
  try {
    // Delete existing user.
    const userId = parseInt(req.params.id);
    const deletedUser = await userService.deleteUserById(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: `User with id: ${userId} not found. No user were deleted.` });
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
