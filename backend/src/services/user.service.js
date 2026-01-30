import HttpError from '../errors/HttpError.js';
import userRepository from '../repositories/user.repository.js';
import bcryptjs from 'bcryptjs';

// Get a list of users
async function findAllUsers() {
  const users = await userRepository.getAll();
  return users;
}

// Get a user by ID
async function findUserById(id) {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new HttpError(`User not found with ID ${id}.`, 404);
  }

  return user;
}

// Create a new user
async function createNewUser({ username, email, password }) {
  // Check if username / email are available.
  await checkEmailAndUsernameAvailability(username, email);
  // Generate hashed password
  const saltRounds = Number(process.env.PASSWORD_SALT) || 10;
  const hashedPassword = await bcryptjs.hash(password, saltRounds);
  // Create new user
  const user = await userRepository.create({ username, email, password: hashedPassword });
  return user;
}

async function updateUserById(id, { username, email, password }) {
  // Before update the user, check its existence.
  await findUserById(id);
  // Update the user.
  const updatedUser = await userRepository.updateById(id, { username, email, password });

  if (!updatedUser) {
    throw new HttpError('Unexpected error during user update.', 500);
  }

  return updatedUser;
}

async function deleteUserById(id) {
  // Before delete the user, check its existence.
  await findUserById(id);
  // Delete the user.
  const deletedUser = await userRepository.deleteById(id);

  if (!deletedUser) {
    throw new HttpError('Unexpected error during user deletion.', 500);
  }

  return deletedUser;
}

export default {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};

/* ---------- helpers privés ---------- */

// Check if username / email are available.
async function checkEmailAndUsernameAvailability(username, email) {
  const existingUsers = await userRepository.getUserWithEmailOrUsername({
    username,
    email,
  });

  // If there are not existing users, username / email are available.
  if (existingUsers.length === 0) {
    return;
  }

  // If there are 2 existing users, both data are not available.
  if (existingUsers.length === 2) {
    throw new HttpError('Email and username already exists', 409);
  }

  // If there are only one existing user, check both data.
  if (existingUsers[0].email === email) {
    if (existingUsers[0].username === username) {
      throw new HttpError('Email and username already exists', 409);
    }
    throw new HttpError('Email already exists', 409);
  }

  throw new HttpError('Username already exists', 409);
}
