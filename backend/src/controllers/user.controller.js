import userService from '../services/user.service.js';

async function getAllUsers(req, res) {
  const users = await userService.findAllUsers();
  res.json({ data: users });
}

async function getUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Retrieve user with a correct integer ID.
  const user = await userService.findUserById(id);
  res.json({ data: user });
}

async function createUser(req, res) {
  const user = await userService.createNewUser(req.body);
  res.status(201).json({ data: user, message: 'User successfully created.' });
}

async function updateUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Update existing user.
  const updatedUser = await userService.updateUserById(id, req.body);
  res.json({ data: updatedUser, message: 'User successfully updated.' });
}

async function deleteUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Delete existing user.
  const deletedUser = await userService.deleteUserById(id);
  res.json({ data: null, message: 'User successfully deleted.' });
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
