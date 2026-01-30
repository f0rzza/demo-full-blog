import userService from '../services/user.service.js';

async function getAllUsers(req, res) {
  const users = await userService.findAllUsers();
  res.json(users);
}

async function getUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Retrieve user with a correct integer ID.
  const user = await userService.findUserById(id);
  res.json(user);
}

async function createUser(req, res) {
  const user = await userService.createNewUser(req.body);
  res.json(user);
}

async function updateUserById(req, res) {
  try {
    // Convert received user ID to number.
    const id = Number(req.params.id);

    // Update existing user.
    const updatedUser = await userService.updateUserById(id, req.body);

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
};
