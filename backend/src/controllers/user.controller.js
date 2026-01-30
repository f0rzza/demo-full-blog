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
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Update existing user.
  const updatedUser = await userService.updateUserById(id, req.body);
  res.json(updatedUser);
}

async function deleteUserById(req, res) {
  // Convert received user ID to number.
  const id = Number(req.params.id);
  // Delete existing user.
  const deletedUser = await userService.deleteUserById(id);
  res.sendStatus(200);
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
